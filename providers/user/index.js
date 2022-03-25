
const { User } = require('@schemas');

const listUsers = (cb) => {
    return User.find().exec(cb);
}

const newUser = (data, cb) => {
    const newUser = new User(data);
    return newUser.save(cb); 
}


module.exports = {
    listUsers,
    newUser
}