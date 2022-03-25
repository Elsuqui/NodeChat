
const chatProvider = require('@providers/chat');


/**
 * List all chat resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
const listChat = (req, res) => {
    chatProvider.listOfChats((error, chats) => {
        if(error)
            res.status(500).send('An error has ocurred');
        else
            res.send(chats);
    });
}

/**
 * Create new resource
 * 
 * @param {*} req 
 * @param {*} res 
 */
const newChat = (req, res) => {
    const data = req.body;
    chatProvider.createChat(data, (error, chat) => {
        if(error)
            res.status(500).send('An error has ocurred');
        else
            res.send(chat);
    });
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