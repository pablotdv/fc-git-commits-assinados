const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// ... (outras partes do seu arquivo)

if (require.main === module) {
    // Este código será executado apenas se este arquivo for o ponto de entrada principal.
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app; // Exporte o app em vez do servidor
