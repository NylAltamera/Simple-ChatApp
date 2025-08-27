function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();

    if (message !== "") {
        var chatBox = document.getElementById("chat-box");

        var messageElement = document.createElement("div");
        messageElement.className = "message sent";
        messageElement.textContent = message;

        chatBox.appendChild(messageElement);
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function refreshChat() {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";
}
