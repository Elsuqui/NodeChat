
const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    console.log("Here I am product endpoint");
    res.send('Here I am product endpoint');
});

module.exports = router;