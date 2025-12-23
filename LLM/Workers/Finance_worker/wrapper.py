import json
import random
import re
import google.generativeai as genai

class GeminiWrapper:
    def __init__(self, config_path="config/config.json"):
        with open(config_path, "r") as f:
            self.config = json.load(f)

        self.api_keys = self.config["gemini"]["api_keys"]
        self.model_name = self.config["gemini"]["model"]

    def _configure_random_key(self):
        api_key = random.choice(self.api_keys)
        genai.configure(api_key=api_key)

    def _clean_response(self, text: str) -> str:
        text = re.sub(r"```(?:json)?", "", text)
        text = text.strip("` \n")

        match = re.search(r'nl_response\s*[:=]\s*["\']?(.*?)(["\'}\n]|$)', text)
        if match:
            clean_text = match.group(1).strip()
            return clean_text

        # If not JSON-like, return plain text
        return text.strip()

    def call(self, prompt: str) -> str:
        self._configure_random_key()
        model = genai.GenerativeModel(self.model_name)
        response = model.generate_content(prompt)

        if not response or not response.candidates:
            raise ValueError("No valid response from Gemini model.")

        # Get raw response text
        text = response.text

        # Clean up unwanted markdown/formatting
        clean_text = self._clean_response(text)

        return clean_text


