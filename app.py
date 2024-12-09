from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Configure OpenAI API
openai.api_key = "your-openai-api-key"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')

    # Get AI response
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=user_message,
            max_tokens=150
        )
        reply = response['choices'][0]['text'].strip()
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": "Oops! Something went wrong."}), 500

if __name__ == '__main__':
    app.run(debug=True)
