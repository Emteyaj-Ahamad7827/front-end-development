const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        text: String,
        isEditing: Boolean,
        isComplete: Boolean,
    },
    {
        versionKey: false,
    },
);

const todoModel = mongoose.model('todo', todoSchema);

module.exports = { todoModel };