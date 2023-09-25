const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/2', (req, res) => {
    res.send('Hello World!');
});

app.get('/3', (req, res) => {
    res.send('Hello World!');
});

app.get('/4', (req, res) => {
    res.send('Hello World!');
});

if (require.main === module) {
    // Este código será executado apenas se este arquivo for o ponto de entrada principal.
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app; // Exporte o app em vez do servidor
