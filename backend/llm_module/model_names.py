from llm_module import gemini, local_ollama

models = {
    "gemini": gemini,
    "local_ollama": local_ollama
}
def all_models():
    return models