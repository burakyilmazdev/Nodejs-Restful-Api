const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

//Import Routes
const postsRoute = require('./routes/posts');


 
//Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    () => console.log('connected')
);




//Listen server
app.listen(8000);
