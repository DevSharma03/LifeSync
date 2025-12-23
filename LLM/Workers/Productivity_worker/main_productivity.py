from Productivity_worker.productivity_handler import ProductivityHandler

if __name__ == "__main__":
    productivity_worker = ProductivityHandler()

    messages = [
    ]

    user_query = "I have a mild headache and slight fever. What should I do?"

    response = productivity_worker.generate_response(user_query, messages=messages)
    print("Productivity Worker Response:\n", response["nl_response"])

