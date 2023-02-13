const path = require('path');

//import express
const express = require('express');
const bodyParser = require('body-parser'); //import after installation

//import router
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

//create express application, initializes a new app
const app = express();
//body parser - done before routing as each request should
//be parsed no matter where it ends up
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);
