from llm_module import local_ollama
from llm_module import gpt

models = {
    #"gemini": gemini,
    "gpt": gpt,
    "local_ollama":local_ollama,
}
def all_models():
    return models