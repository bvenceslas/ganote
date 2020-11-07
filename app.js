require('./db/db');
const express = require('express');

//use environment variables
require('dotenv').config();

const app = express();
app.use(express.json()); // replacing body-parser library


const port = process.env.PORT || 5070;
app.listen(port, () => console.log(`GaNote is listening request on : http://localhost:${port} .......`));