from wrapper import GeminiWrapper
from jinja2 import Template
from datetime import datetime

class MindHandler:
    def __init__(self, config_path="Workers/Mind_worker/config/config.json", prompt_template_path="Workers/Mind_worker/config/prompt_template/prompt.j2"):
        self.llm = GeminiWrapper(config_path)
        with open(prompt_template_path, "r") as f:
            self.template = Template(f.read())

    def _format_messages(self, messages):
        formatted = ""
        for msg in messages:
            formatted += f"User: {msg.get('user','')}\n"
            formatted += f"Response: {msg.get('response','')}\n"
        return formatted.strip()

    def generate_response(self, user_query, messages=None):

        context = self._format_messages(messages) if messages else ""

        datetime_info = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        worker_input = {
            "user_query": user_query,
            "context": context,
            "datetime": datetime_info
        }

        prompt = self.template.render(
            rephrased_question=worker_input["user_query"],
            context=worker_input["context"],
            datetime_info=worker_input["datetime"],
        )

        nl_response = self.llm.call(prompt)

        return {"nl_response": nl_response}

