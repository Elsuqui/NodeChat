const { addAliases } = require('module-alias')

/**
 * Register aliases: you need to declare before start server
 */
 addAliases({ 
    "@routes": `${__dirname}/routes/`,
    "@controllers": `${__dirname}/controllers/`,
    "@providers": `${__dirname}/providers/`
 });

const express = require('express');
const routerInit = require('./routes');

const app = express();

routerInit(app);


app.listen(3000, function (){
    console.log('Application running on http://localhost:3000');
});