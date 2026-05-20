const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        user_ID: {
            type: mongoose.Schema.type.objectID,
            ref: 'User',
        },
        batch: String,
        time: Number,
        achievements: [String],
        role: {
            type: String,
            eunm: ['student', 'trainer', 'admin'],
        },
    },
    {
        versionKey: false,
    },
);

const studentModel = mongoose.model('student', studentSchema);

module.exports = { studentModel };