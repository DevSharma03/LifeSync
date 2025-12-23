from finance_handler import FinanceHandler

if __name__ == "__main__":
    finance_worker = FinanceHandler()

    messages = [
    ]

    user_query = "I have a mild headache and slight fever. What should I do?"

    response = finance_worker.generate_response(user_query, messages=messages)
    print("Finance Worker Response:\n", response["nl_response"])

