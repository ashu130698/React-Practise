const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/dummy");
    } catch (error) {
        console.log('Error in connection',error);
        
    }
    
}

module.exports = connectDB;