all_prompts = {
    "/": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in chinese language",
            "supervisor": "speak with user in chinese language",
            "technician": "speak with user in chinese language"
        }
    },
    "/accounts": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in hindi language",
            "supervisor": "speak with user in hindi language",
            "technician": "speak with user in hindi language"
        }
    },
    "/inventory": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in  Arabic language",
            "supervisor": "speak with user in Arabic language",
            "technician": "speak with user in Arabic language"
        }
    },
    "/maintenance": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in French language",
            "supervisor": "speak with user in Frenche language",
            "technician": "speak with user in French language"
        }
    },
    "/procurement": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in Russian language",
            "supervisor": "speak with user in Russian language",
            "technician": "speak with user in Russian language"
        }
    },
    "/requisitions": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in Danish language",
            "supervisor": "speak with user in Danish language",
            "technician": "speak with user in Danish language"
        }
    },
    "/support_chat": {
        "insight": {
            "admin": "tell user good morning",
            "supervisor": "tell user good morning",
            "technician": "tell user good morning"
        },
        "chat": {
            "admin": "speak with user in English language",
            "supervisor": "speak with user in English language",
            "technician": "speak with user in English language"
        }
    },

}

def get_prompt(page: str, ai_type: str, role: str) -> str:
    try:
        return all_prompts[page][ai_type][role]
    except KeyError:
        return "Prompt not found for the given page, ai_type, or role."