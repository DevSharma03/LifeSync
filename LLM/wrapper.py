import json
import random
import google.generativeai as genai

class GeminiWrapper:
    def __init__(self, config_path="Config/Config.json"):
        with open(config_path, "r") as f:
            self.config = json.load(f)

        self.api_keys = self.config["gemini"]["api_keys"]
        self.model_name = self.config["gemini"]["model"]

    def _configure_random_key(self):
        api_key = random.choice(self.api_keys)
        genai.configure(api_key=api_key)

    def call(self, prompt: str) -> str:
        self._configure_random_key()

        model = genai.GenerativeModel(self.model_name)
        response = model.generate_content(prompt)

        if not response or not response.candidates:
            raise ValueError("No valid response from Gemini model.")

        return response.text

