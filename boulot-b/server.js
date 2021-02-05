// Use strict mode
'use strict';


let getAll = require('./api.js');
const getUrlImage = require('./urlImage.js');
// Load usefull expressjs and nodejs objects / modules
const express = require('express');
const path = require('path');
const cors = require("cors")

const app = express();

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, 'frontend/dist')));
app.use(express.static(path.join(__dirname, '../__common-logos__')));
app.use(cors())

// You can then add whatever routing code you need

app.use(express.static('public'));
app.use('/styles', express.static(__dirname +'/frontend/src/style'));

// app.get('/trajet/:depart/:arrivee/:transport/:style/:sallesport/:bar/:boulangerie/:pharmacie', async (req, res) => getAll(req, res))
app.get('/trajet/:departX/:departY/:arriveeX/:arriveeY/:transport/:style/:sallesport/:bar/:boulangerie/:pharmacie',
    async (req, res) => {
    try {
        await getAll(req, res)
    } catch (e) {
        console.log('erreur', e)
        res.status(404).json(e)
    }
})


// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;
