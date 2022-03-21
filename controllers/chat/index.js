
const chatProvider = require('@providers/chat');


/**
 * List all chat resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
const listChat = (req, res) => {
    res.send('Chats room list...');   
}

/**
 * Create new resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
const newChat = (req, res) => {
    res.send('New Chat room');
}

/**
 * Update a resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateChat = (req, res) => {
    res.send('Modify specfic chat`s data');
}

/**
 * Deelete a resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteChat = (req, res) => {
    res.send('Remove chat room');
}


module.exports = {
    listChat,
    newChat,
    updateChat,
    deleteChat
}