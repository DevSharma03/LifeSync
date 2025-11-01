import json
import datetime
from jinja2 import Template
from wrapper import GeminiWrapper

class Router:
    def __init__(self, template_path="Config/Prompt_template/Router.j2", config_path="Config/Config.json"):
        self.template_path = template_path
        self.llm = GeminiWrapper(config_path)

    def _format_messages(self, messages):
        formatted = ""
        for msg in messages:
            formatted += f"User: {msg.get('user','')}\n"
            formatted += f"Response: {msg.get('response','')}\n"
        return formatted.strip()

    def _render_prompt(self, nl_query, messages):
        with open(self.template_path, "r") as f:
            template = Template(f.read())

        now = datetime.datetime.now()
        context = {
            "nl_query": nl_query,
            "message": self._format_messages(messages),
            "current_time": now.strftime("%H:%M:%S"),
            "current_day": now.strftime("%A")
        }

        return template.render(**context)

    def route_query(self, nl_query, messages=[]):
        prompt = self._render_prompt(nl_query, messages)
        response_text = self.llm.call(prompt)

        try:
            start = response_text.find('{')
            end = response_text.rfind('}') + 1
            json_part = response_text[start:end]
            response_data = json.loads(json_part)
        except Exception:
            response_data = {
                "query": nl_query,
                "routes": [
                    {"worker": "invalid", "rephrased_question": nl_query}
                ]
            }

        return response_data
















