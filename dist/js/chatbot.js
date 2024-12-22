// Hacer una solicitud al servidor Node.js para crear una sesión
fetch('/api/session')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const sessionId = data.sessionId;
        const chatbotContainer = document.getElementById('chatbot-container');
        chatbotContainer.innerHTML = `<p>Chatbot iniciado con sessionId: ${sessionId}</p>`;

        // Aquí puedes agregar código adicional para manejar la interacción con el chatbot usando el sessionId
    })
    .catch(err => {
        console.log('error:', err);
    });