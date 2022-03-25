const mongoose = require('mongoose');
require('dotenv').config();


const connect = () => {
   const connectionString = prepareConnectionString();
   return mongoose.connect(connectionString);
}


const prepareConnectionString = () => {
    //console.log('Process env: ', process.env);
    const user = process.env.MONGO_USER || "root";
    const password = process.env.MONGO_PASSWORD || "";
    const database = process.env.MONGO_DATABASE || "test";
    const port = process.env.MONGO_PORT || "27017";
    const host = process.env.MONGO_HOST || "localhost";
    return `mongodb://${host}:${port}/${database}`;
}

const initializeSchemas = () => {
   require('@schemas'); 
}

module.exports = {
    connect,
    initializeSchemas
};