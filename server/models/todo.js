const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: [true, 'Please add a todo'],
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

module.exports = {Todo}