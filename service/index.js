const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { MongoClient } = require('mongodb');


const productRouter = require('./routes/productRouter');
const profileRouter = require('./routes/profileRouter');
const transactionRouter = require('./routes/transactionRouter');

const mongoURI = 'mongodb+srv://dbAdmin:gTjdXeMCRJTAuiiA@st-helens.prav3.mongodb.net?retryWrites=true&w=majority';

const logger = (req, res, next) => {
    console.log(req.method + ' ' + req.url);
    return next();
}

MongoClient.connect(mongoURI, (err, client) => {
    if (err) {
        throw err;
    }
    console.log("connected");

})

app.use(logger, express.json());
app.use(cors());
app.use('/api/v1/products', productRouter);
app.use('/api/v1/profiles', profileRouter);
app.use('/api/v1/transactions', transactionRouter);

/*app.get('/', (request, response) => {
    response.send("Hello World!");
});*/

/*app.get('/api/v1/products', productRouter);*/

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);


})
