const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        city: String,
        don: Number,
        blood_group: String,
        address: String,
        gender: String,
        contact: { type: Number, min: 10},
    },
    {
        versionKey: false,
    },
);

const userModel = mongoose.model('user', userSchema);

module.exports = { userModel };