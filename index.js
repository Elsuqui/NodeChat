const { addAliases } = require('module-alias');

const express = require('express');

function main() {

    /**
     * Register aliases: you need to declare before start server
     */
    addAliases({ 
        "@routes": `${__dirname}/routes/`,
        "@controllers": `${__dirname}/controllers/`,
        "@providers": `${__dirname}/providers/`,
        "@services": `${__dirname}/services/`,
        "@schemas": `${__dirname}/schemas`
    });

    const routerInit = require('@routes');
    const { mongoService } = require('@services');

    const app = express();

    mongoService.connect()
    .then(() => {
        mongoService.initializeSchemas();
    })
    .catch((error) => console.error('Mongo db connection failed', error));

    app.use(express.json());

    routerInit(app);

    app.listen(3000, function (){
        console.log('Application running on http://localhost:3000');
    });
}

/**
 * 
 * Main function
 * 
 */
main();