import json
from groq import Groq


class GroqWrapper:
    def __init__(self, config_path="Config/Config.json"):
        with open(config_path, "r") as f:
            self.config = json.load(f)

        self.api_key = self.config["groq"]["api_key"]
        self.model_name = self.config["groq"]["model"]

        # Configure client ONCE
        self.client = Groq(api_key=self.api_key)

    def call(self, prompt: str) -> str:
        try:
            completion = self.client.chat.completions.create(
                model=self.model_name,
                messages=[
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7
            )

            if not completion or not completion.choices:
                raise ValueError("No valid response from Groq model.")

            return completion.choices[0].message.content

        except Exception as e:
            print("[Groq ERROR]", str(e))
            return None


