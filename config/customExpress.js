
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

 var customExpress =  ()=>{
     const app = express();
    app.use(bodyParser.json())
    //app.use(bodyParser.urlencoded({extended: true}));
//adicionar o controlles na variavel app.

    consign().include('controllers').into(app);

    return app;
 }

 module.exports = customExpress;

