const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
//equire('dotenv').config();

const bodyParser= require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT ||3000;

const userRouters = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

app.use('/user', userRouters);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})