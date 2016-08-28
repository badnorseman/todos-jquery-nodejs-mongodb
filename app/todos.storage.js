'use strict'
const Todos = require('./models/todos.storage')

exports.create = (req, res) => {
  if (!req.body || !req.body.text) return res.sendStatus(400)
  const text = req.body.text
  const todo = Todos.create(text)
  res.status(201).json(todo)
}

exports.retrieveAll = (req, res) => {
  const todos = Todos.retrieveAll()
  res.status(200).json(todos)
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
