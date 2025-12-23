from health_handler import HealthHandler

if __name__ == "__main__":
    health_worker = HealthHandler()

    messages = [
    ]

    user_query = "I have a mild headache and slight fever. What should I do?"

    response = health_worker.generate_response(user_query, messages=messages)
    print("Health Worker Response:\n", response["nl_response"])

