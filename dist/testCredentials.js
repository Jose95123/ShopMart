const { IamAuthenticator } = require('ibm-watson/auth');
const AssistantV2 = require('ibm-watson/assistant/v2');

// Configura el SDK de IBM Watson
const assistant = new AssistantV2({
    version: '2024-12-06',
    authenticator: new IamAuthenticator({
        apikey: 'YjXdYiZ2NVFOUKI0lMUwcmIZ-BiuYN6dh-ZQPjXopOyY',
    }),
    serviceUrl: 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/1ff647c0-c9b2-4b99-8782-e6337e442ee8',
});

// Prueba las credenciales creando una sesión
assistant.createSession({
    assistantId: 'c04b538c-b5d5-4c84-8c6a-254b33cd332a'
})
    .then(response => {
        console.log('Credenciales válidas. Session ID:', response.result.session_id);
    })
    .catch(err => {
        console.error('Error al probar las credenciales:', err);
        console.error('assistantId:', 'c04b538c-b5d5-4c84-8c6a-254b33cd332a');
        console.error('serviceUrl:', 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/1ff647c0-c9b2-4b99-8782-e6337e442ee8');
    });