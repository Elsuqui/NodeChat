
const userRoutes = require('@routes/user');
const productRoutes = require('@routes/product');
const chatRoutes = require('@routes/chat');

const initializeRoutes = (app) => {
    app.get('/', (req, res) => res.send('Welcome to my Node API'));
    app.use('/chats', chatRoutes);
    app.use('/users', userRoutes);
    app.use('/products', productRoutes);
}


module.exports = initializeRoutes;