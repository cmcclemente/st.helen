const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');


const productRouter = require('./routes/productRouter');
const profileRouter = require('./routes/profileRouter');
const transactionRouter = require('./routes/transactionRouter');


const logger = (req, res, next) => {
    console.log(req.method + ' ' + req.url);
    return next();
}

//Test connection
const user = keys.MONGO_USER;
const password = keys.MONGO_PASS;
const mongoDB = 'mongodb+srv://'+ user +':'+password+'@st-helens.prav3.mongodb.net/offerup?retryWrites=true&w=majority';;
mongoose
.connect(mongoDB,{useNewUrlParser: true,useUnifiedTopology:true})
.then(
    () => {console.log("Connected");},
    (err) => {console.log('Connection failed with ' +  mongoDB + ' '+ err);},
);

const db = mongoose.connection;
db.on('error', () => console.log('MongoDB connection error:'));
db.on('close', () => { console.log('MongoDB connection closed'); });

app.use(logger, express.json());
app.use(cors());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/profiles', profileRouter);
app.use('/api/v1/transactions', transactionRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);


})
