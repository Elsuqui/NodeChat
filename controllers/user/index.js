
const userProvider = require('@providers/user');

const listUsers = (req, res) => {
    userProvider.listUsers((err, users) => {
        if(err)
            res.status(500).send('An error has ocurred');
        else
            res.send(users);
    });
}


const createUser = (req, res) => {
    const data = req.body;
    userProvider.newUser(data, (err, user) => {
        if(err)
            res.status(500).send('An error has ocurred');
        else
            res.send(user);
    });
}


module.exports = {
    listUsers,
    createUser
}