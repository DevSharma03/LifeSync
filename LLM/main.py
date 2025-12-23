from Agent import MainAgent

if __name__ == "__main__":
    agent = MainAgent()

    messages = []
    user_query = "I’ve been feeling stressed and can’t focus at work; I also get frequent headaches. What should I do?"

    print("\n[STEP 0] Starting MainAgent...")
    result = agent.handle_user_query(user_query, messages=messages)