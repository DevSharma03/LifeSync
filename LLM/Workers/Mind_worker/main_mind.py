from Mind_worker.mind_handler import MindHandler

if __name__ == "__main__":
    mind_worker = MindHandler()

    messages = [
    ]

    user_query = "I have a mild headache and slight fever. What should I do?"

    response = mind_worker.generate_response(user_query, messages=messages)
    print("Mind Worker Response:\n", response["nl_response"])

