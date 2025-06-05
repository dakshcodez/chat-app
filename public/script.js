const ws = new WebSocket(`wss://${window.location.host}`);

const messages = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('sendButton');

ws.onmessage = (event) => {
    const msg = document.createElement('div');
    msg.textContent = event.data;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
};

function sendMessage(){
    if (input.value) {
        ws.send(input.value);
        input.value = '';
    }
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

sendButton.addEventListener('click', sendMessage);