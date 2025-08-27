const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./connect');

const app = express();
//json parser
app.use(express.json());
connectDB();

app.use('/api/auth', require('./routes/userRoute'));

app.listen(5000, () =>
    console.log("server started"));
    