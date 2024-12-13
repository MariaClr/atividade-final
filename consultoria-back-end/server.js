const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 2702;

app.use(cors({
    origin: 'http://localhost:3002'
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, '../projeto-final/src/app')));

app.get("/", (req, res) => {
    res.status(200).send("teste funcionando");
});

app.post('/api/formulario', (req, res) => {
    console.log(req.body);
    res.status(200).send('dados recebidos');
});

app.listen(port, () => {
    console.log(`servidor porta: ${port}`);
});
