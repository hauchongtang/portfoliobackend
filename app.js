const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Configure dotenv
dotenv.config({path: './config/config.env'});

// Middlewares -> execute a function when we hit a route
const app = express();
app.use(express.json());
app.use(cors());

const routes = require('./routes/routes');
app.use('/api/projectcards', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req,res) => 
    res.sendFile(
        path.resolve(__dirname, 'client', 'build', 'index.html')));
}

mongoose
    .connect(process.env.MONGODB_URL, 
        { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log(`Connected to MongoDB on Port ${process.env.PORT}`)
    }).catch((error) => console.log(error));
module.exports = app;