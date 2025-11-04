const mongoose = require('mongoose');

exports.connectToDatabase = () => {
    const uri = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/RB';
    mongoose.connect(uri).then(() => {
        console.log('Connected To DataBase');
    }).catch((error) => {
        console.log('Database connection error:', error);
    });
}