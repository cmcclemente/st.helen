const express = require('express');
const app = express();
const port = 5000;


const productRouter = require('./routes/productRouter');
const profileRouter = require('./routes/profileRouter');
const transactionRouter = require('./routes/transactionRouter');

const logger = (req,res,next)=>{
    console.log(req.method + ' '+ req.url);
    return next();
}

app.use(logger,express.json());
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
