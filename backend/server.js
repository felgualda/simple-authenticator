const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

//rotas basicas
app.get('/', (req, res) => {
    res.send('Esta é uma mensagem do servidor.');
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});

