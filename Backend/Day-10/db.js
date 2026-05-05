const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.MongoDB_URL)

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        married: Boolean,
        orgazination: String,
        hobbies: Object,
    },
    {
        versionKey: false,
    },

);

// const userModel = new mongoose.model
// ('user', userSchema);

const userModel = new mongoose.model('user', userSchema);

module.exports = { connection, userModel}
