const { Chat } = require('@schemas');

const listOfChats = (cb) => {
    return Chat.find().exec(cb);
}

const createChat = (data, cb) => {
    const newChat = new Chat(data);
    return newChat.save(cb);
} 


module.exports = {
    listOfChats,
    createChat
}