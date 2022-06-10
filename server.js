'use strict';

// import dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// import files
//setting variable modules(folder), drilling to handler(file) to get the handlers(function)
const Handler = require('./modules/handlers');

// impomrt and connect mongoose to mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION);
const db = mongoose.connection;
// test to see if database is on
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected to mongo db'));

// create instances of express
const app = express();

// middleware
app.use(cors());

// setting the PORT variable
const PORT = process.env.PORT || 3002;

// define home end point
//call Handler from js file
app.get('/', Handler.getHome);

// error handling middleware
app.use((error, request, response, next) => response.status(500).send(error.customMsg + error.message));

// this has to be the vary last item in js file
// connects server to PORT so it can run on the internet
app.listen(PORT, () => console.log(`listening on port ${PORT}`));