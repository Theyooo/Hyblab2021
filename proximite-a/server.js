// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
const api = require('./src/api/api');
var app = express();

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, '../__common-logos__')));

app.use('/api', api(app));

// You can then add whatever routing code you need


// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by launching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/

module.exports = app;

