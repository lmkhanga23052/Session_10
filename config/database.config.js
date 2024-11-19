const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://MongoAtlas:khang@cluster0.ej82y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Kết nối MongoDB thành công');
    } catch (err) {
        console.error('Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
