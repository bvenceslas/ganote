require('./db/db');
const express = require('express');

require('dotenv').config();

const app = express();
app.use(express.json()); 

app.use('/api', require('./routes/note.route'));

const port = process.env.PORT || 5070;
app.listen(port, () => console.log(`GaNote is listening request on : http://localhost:${port} ...`));