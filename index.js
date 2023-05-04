const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chefs-House-Server is Running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Chefs-House-Server is Running on PORT: ${port}`);
})