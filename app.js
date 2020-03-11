// app

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // rotas do produto //
const app = express();

// Configurar mongoose

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://admin:admin@c9-dkdh5.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

//porta 

let port = 1234;

app.listen(port, () => {
   console.log('O servidor está rodando na porta ' + port);
});