
const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    console.log("Here I am user endpoint");
    res.send('Here I am user endpoint');
});

module.exports = router;