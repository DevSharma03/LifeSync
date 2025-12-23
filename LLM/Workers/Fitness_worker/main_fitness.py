from fitness_handler import FitnessHandler

if __name__ == "__main__":
    fitness_worker = FitnessHandler()

    messages = [
    ]

    user_query = "I have a mild headache and slight fever. What should I do?"

    response = fitness_worker.generate_response(user_query, messages=messages)
    print("Fitness Worker Response:\n", response["nl_response"])

