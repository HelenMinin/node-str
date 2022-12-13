'use strict';

const secret = require('../secret');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta com o banco de dados
mongoose.connect(secret.connectionstring);

// carrega os models
const Product = require('./models/products');

// carrega as rotas
const index = require('./routes/index');
const products = require('./routes/products')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/', index);
app.use('/products', products);

module.exports = app; 
