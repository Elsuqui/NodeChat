
const express = require('express');
const router = express.Router();

const userController = require('@controllers/user');

router.get('/', userController.listUsers);
router.post('/', userController.createUser);

module.exports = router;