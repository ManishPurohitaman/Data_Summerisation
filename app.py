from flask import Flask, request
from core import generateSummary

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to the Text Summarization API"

@app.route('/summarize', methods=['POST'])
def summarize():
    original_text = request.form['text']
    max_length = len(original_text) // 2
    if request.form['summary_size'] is not None:
        max_length = int(request.form['summary_size'])
    min_length = max_length // 2
    summary = generateSummary(original_text, min_length, max_length)
    return summary

if __name__ == '__main__':
    app.run(debug=True)