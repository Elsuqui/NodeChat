
const router = require('express').Router();
const chatController = require('@controllers/chat');

router.get('/', chatController.listChat);

router.post('/', chatController.newChat);

router.patch('/', chatController.updateChat);

router.delete('/:id', chatController.deleteChat);


module.exports = router;