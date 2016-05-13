'use strict'
const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({ text: { type: String, required: true }})
const Todos = mongoose.model('Todo', todoSchema)

module.exports = Todos
