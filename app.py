import math
from flask import Flask, request
from flask_cors import CORS
from core import generateSummary

app = Flask(__name__)
CORS(app) 

cors = CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/')
def index():
    return 

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        data = request.get_json()
        original_text = str(data.get('inputText'))
        summary_size = int(data.get('summarySize'))
        original_text_size = len(original_text.split())
        max_length = min(original_text_size,math.ceil(original_text_size* summary_size / 100))
        min_length = math.ceil(max_length / 2)
        summary = generateSummary(original_text, min_length, max_length)
        return summary
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
