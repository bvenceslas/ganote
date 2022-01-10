require('dotenv').config();
const { connect } = require('mongoose');

connect(process.env.DB_PATH, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}, () => {
    console.log('Ganote DB connected successfuly');
});