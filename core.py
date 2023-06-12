import requests
import configparser

config = configparser.ConfigParser()
config.read('./config.ini')

API_TOKEN = config.get('SERVER_TOKEN', 'API_TOKEN')
API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response

def generateSummary(data: str, minL: int, maxL: int) -> str:
    response = query({
        "inputs": data,
        "parameters": {"min_length": minL, "max_length": maxL}
    })

    if response.status_code == 200:
        return response.json()[0]['summary_text']
    else:
        return 'Error occured, Please check the text and summary length values'+response.json()["error"]