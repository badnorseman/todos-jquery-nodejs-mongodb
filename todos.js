'use strict'
const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({ text: { type: String, unique: true }})
const Todo = mongoose.model('Todo', todoSchema)
const Todos = require('./storage')

exports.create = (req, res) => {
  if (!req.body || !req.body.text) return res.sendStatus(400)
  const todo = { text: req.body.text }
  Todo.create(todo, (err, todo) => {
    if (err || !todo) return res.status(500).json({ err })
    res.status(201).json({ todo })
  })
}

exports.retrieveAll = (req, res) => {
  Todo.find((err, todos) => {
    if (err) return res.status(500).json({ err })
    if (todos.length === 0) return res.status(204).end()
    res.status(200).json(todos)
  })
}

exports.update = (req, res) => {
  if (!req.params || !req.params.id || !req.body || !req.body.text) return res.sendStatus(400)
  const id = { _id: req.params.id }
  const todo = { text: req.body.text }
  Todo.findOneAndUpdate(id, todo, (err, todo) => {
    if (err) return res.status(500).json({ err })
    res.status(200).json(todo)
  })
}

exports.delete = (req, res) => {
  if (!req.params || !req.params.id) return res.sendStatus(400)
  const id = { _id: req.params.id }
  Todo.findOneAndRemove(id, (err, todo) => {
    if (err) return res.status(500).json({ err })
    res.status(200).json(todo)
  })
}
