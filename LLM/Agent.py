import json
from Router import Router
from Workers.Health_worker.health_handler import HealthHandler
from Workers.Finance_worker.finance_handler import FinanceHandler
from Workers.Mind_worker.mind_handler import MindHandler
from Workers.Productivity_worker.productivity_handler import ProductivityHandler
from Workers.Fitness_worker.fitness_handler import FitnessHandler

class MainAgent:
    def __init__(self):
        self.router = Router()
        self.conversation_history = []

        self.workers = {
            "health_worker": HealthHandler(),
            "finance_worker": FinanceHandler(),
            "mind_worker": MindHandler(),
            "productivity_worker": ProductivityHandler(),
            "fitness_worker": FitnessHandler()
        }

    def _validate_response(self, response):
        if not response or "undefined" in response.lower() or len(response.strip()) < 5:
            return {"status": "error", "message": "Invalid or incomplete response from worker."}
        return {"status": "ok", "message": "Valid response"}

    def _extract_nl_response(self, raw_response):
        if not raw_response:
            return ""
        try:
            start = raw_response.find("{")
            end = raw_response.rfind("}") + 1
            json_part = raw_response[start:end]
            parsed = json.loads(json_part.replace("nl_response:", "\"nl_response\":"))
            if "nl_response" in parsed:
                return parsed["nl_response"].strip()
        except Exception:
            pass

        text = raw_response.replace("\n", " ").replace("\\n", " ")
        text = text.replace("{", "").replace("}", "").replace("nl_response:", "")
        text = text.replace('"', "").strip()
        while "  " in text:
            text = text.replace("  ", " ")
        return text

    def handle_user_query(self, user_query, messages=None):
        if messages is not None:
            self.conversation_history = messages

        print("\n[STEP 1] Routing the query through LLM Router...")
        route_result = self.router.route_query(user_query, self.conversation_history)
        print("Router Output:\n", json.dumps(route_result, indent=4))

        all_worker_outputs = {}

        print("\n[STEP 2] Processing routed workers...")

        for route in route_result.get("routes", []):
            worker_name = route.get("worker", "invalid")
            rephrased_question = route.get("rephrased_question", user_query)

            print(f"\nProcessing Route: {worker_name}")

            # If worker is direct_worker or invalid, just use rephrased_question as nl_response
            if worker_name in ["direct_worker", "invalid"]:
                response_text = rephrased_question
                validation = self._validate_response(response_text)
            # Otherwise, call actual worker
            elif worker_name in self.workers:
                try:
                    worker = self.workers[worker_name]
                    result = worker.generate_response(rephrased_question, messages=self.conversation_history)
                    raw_response = result.get("nl_response", "") if isinstance(result, dict) else str(result)
                    response_text = self._extract_nl_response(raw_response)
                    validation = self._validate_response(response_text)
                    if validation["status"] == "error":
                        response_text = "Sorry, I couldn’t generate a valid response for this part of your query."
                except Exception as e:
                    response_text = f"Worker execution failed: {str(e)}"
                    validation = {"status": "error", "message": str(e)}
            else:
                response_text = f"No such worker found: {worker_name}"
                validation = {"status": "error", "message": "Worker not found."}

            all_worker_outputs[worker_name] = {
                "input_query": rephrased_question,
                "nl_response": response_text,
                "validation": validation
            }

        final_output = {
            "route_output": route_result,
            "workers_output": all_worker_outputs
        }

        self.conversation_history.append({
            "user": user_query,
            "response": final_output
        })

        print("\n[STEP 3] Final Combined Output:")
        print(json.dumps(final_output, indent=4))

        return final_output












