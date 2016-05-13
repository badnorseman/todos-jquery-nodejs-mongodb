'use strict'
const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({ todo: String })
const Todo = mongoose.model('Todo', todoSchema)
const Todos = require('./storage')

exports.create = (req, res) => {
  if (!req.body || !req.body.text) return res.sendStatus(400)
  const text = req.body.text
  const todo = Todos.create(text)
  res.status(201).json(todo)
  // const todo = { text }
  // Todo.create(todo, (err, todo) => {
  //   if (err || !todo) return res.status(500).json({ err })
  //   res.status(201).json({ todo })
  // })
}

exports.retrieveAll = (req, res) => {
  const todos = Todos.retrieveAll()
  res.status(200).json(todos)
  // Todo.find((err, todos) => {
  //   if (err) return res.status(500).json({ err })
  //   if (todos.length === 0) return res.status(204).end()
  //   res.status(200).json(todos)
  // })
}

exports.update = (req, res) => {
  if (!req.params || !req.params.id || !req.body || !req.body.text) return res.sendStatus(400)
  const id = req.params.id
  const text = req.body.text
  const todo = Todos.update(id, text)
  res.status(200).json(todo)
}

exports.delete = (req, res) => {
  if (!req.params || !req.params.id) return res.sendStatus(400)
  const id = req.params.id
  const todo = Todos.delete(id)
  res.status(200).json(todo)
}
