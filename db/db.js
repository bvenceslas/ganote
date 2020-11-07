const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_PATH, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log('GaNote mongoDB connected successfuly');
});