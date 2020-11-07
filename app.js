const express = require('express');

const app = express();
app.use(express.json());

const port = 3070;

app.listen(port, () => {
    console.log(`GaNote is listening request on : http://localhost:${port} .......`)
})