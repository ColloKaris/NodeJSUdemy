//import express
const express = require('express');
const bodyParser = require('body-parser'); //import after installation

//create express application, initializes a new app
const app = express();

//body parser - done before routing as each request should
//be parsed no matter where it ends up
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})

app.use('/product', (req, res, next)=> {
    //extract what the user sent
    console.log(req.body);
    //redirection
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    res.send("<h1>Hello from Express!</h1>")
})

app.listen(3000);
