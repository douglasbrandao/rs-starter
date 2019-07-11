const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors'); // access control allow origin

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
// iniciando o bd

mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi', 
    { 
        useNewUrlParser: true
    },
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);