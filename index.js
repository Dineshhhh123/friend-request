require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
const authroutes = require('./src/routers/authRouter');
const requestroutes = require('./src/routers/requestRouter')

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
app.use('/', authroutes);
app.use('/', requestroutes);
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("mongodb connected");
})