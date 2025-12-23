LLM/
│
├── Agent_API.py                    # FastAPI application with /query endpoint
├── Agent.py                        # Main agent implementation
├── Router.py                       # Routing logic
├── wrapper.py                      # Wrapper utilities
├── main.py                         # Main entry point
│
├── __pycache__/                    # Python cache files
│
├── Config/                         # Global configuration
│   ├── Config.json                 # Configuration settings
│   └── Prompt_template/
│       └── Router.j2               # Router prompt template
│
└── Workers/                        # Specialized worker modules
    ├── content.txt                 # Shared content/references
    │
    ├── Finance_worker/             # Financial planning specialist
    │   ├── main_finance.py
    │   ├── finance_handler.py
    │   ├── wrapper.py
    │   ├── config/
    │   │   ├── config.json
    │   │   └── prompt_template/
    │   │       └── prompt.j2
    │   └── __pycache__/
    │
    ├── Health_worker/              # Health & wellness specialist
    │   ├── main_health.py
    │   ├── health_handler.py
    │   ├── wrapper.py
    │   ├── config/
    │   │   ├── config.json
    │   │   └── prompt_template/
    │   │       └── prompt.j2
    │   └── __pycache__/
    │
    ├── Fitness_worker/             # Fitness & exercise specialist
    │   ├── main_fitness.py
    │   ├── fitness_handler.py
    │   ├── wrapper.py
    │   ├── config/
    │   │   ├── config.json
    │   │   └── prompt_template/
    │   │       └── prompt.j2
    │   └── __pycache__/
    │
    ├── Mind_worker/                # Mental health & mindfulness specialist
    │   ├── main_mind.py
    │   ├── mind_handler.py
    │   ├── wrapper.py
    │   ├── config/
    │   │   ├── config.json
    │   │   └── prompt_template/
    │   │       └── prompt.j2
    │   └── __pycache__/
    │
    └── Productivity_worker/        # Productivity & time management specialist
        ├── main_productivity.py
        ├── productivity_handler.py
        ├── wrapper.py
        ├── config/
        │   ├── config.json
        │   └── prompt_template/
        │       └── prompt.j2
        └── __pycache__/