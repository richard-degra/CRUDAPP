// app

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // rotas do produto //
const app = express();

// Configurar conexão mongoose

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@c9-dkdh5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

//porta 

let port = 1234;

app.listen(port, () => {
   console.log('O servidor está rodando na porta ' + port);
});