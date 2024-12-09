async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Display user message
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Clear input field
    document.getElementById('user-input').value = '';

    // Fetch AI response
    const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();

    // Display AI response
    chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
