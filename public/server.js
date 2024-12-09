const express = require('express');
const path = require('path');
const { IamAuthenticator } = require('ibm-watson/auth');
const AssistantV2 = require('ibm-watson/assistant/v2');

const app = express();
const port = process.env.PORT || 3000;

// Configura el SDK de IBM Watson
const assistant = new AssistantV2({
    version: '2024-12-06',
    authenticator: new IamAuthenticator({
        apikey: 'YjXdYiZ2NVFOUKI0lMUwcmIZ-BiuYN6dh-ZQPjXopOyY',
    }),
    serviceUrl: 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/1ff647c0-c9b2-4b99-8782-e6337e442ee8',
});

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// Ruta para crear una sesión
app.get('/api/session', (req, res) => {
    assistant.createSession({
        assistantId: 'c04b538c-b5d5-4c84-8c6a-254b33cd332a'
    })
        .then(response => {
            res.json({ sessionId: response.result.session_id });
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});