const path = require('path');

//import express
const express = require('express');
const bodyParser = require('body-parser'); //import after installation

//import router
const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

//create express application, initializes a new app
const app = express();

//LET EXPRESS JS KNOW THAT WE WILL USED A TEMPLATING ENGINE TO RENDER
//DYNAMIC TEMPLATES - set  global configuration val
app.set('view engine', 'pug');
//app.set('view', 'views')

//body parser - done before routing as each request should
//be parsed no matter where it ends up
app.use(bodyParser.urlencoded({extended: false}));

//serve files statically
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);
