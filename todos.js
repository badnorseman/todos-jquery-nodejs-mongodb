'use strict'
const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({ todo: String })
const Todo = mongoose.model('Todo', todoSchema)
const Todos = require('./storage')

exports.create = function(req, res) {
  if (!req.body || !req.body.name) return res.sendStatus(400)
  const name = req.body.name
  const todo = Todos.create(name)
  res.status(201).json(todo)
  // Todo.save((err, todo) => {
  //   if (err) return res.status(500).json({ err })
  //   res.status(201).json({ todo })
  // })
}

exports.retrieveAll = function(req, res) {
  const todos = Todos.retrieveAll()
  res.status(200).json(todos)
  // Todo.find((err, todos) => {
  //   if (err) return res.status(500).json({ err })
  //   if (todos.length === 0) return res.status(204).end()
  //   res.status(200).json(todos)
  // })
}

exports.update = function(req, res) {
  if (!req.params || !req.params.id || !req.body || !req.body.name) return res.sendStatus(400)
  const id = req.params.id
  const name = req.body.name
  const todo = Todos.update(id, name)
  res.status(200).json(todo)
}

exports.delete = function(req, res) {
  if (!req.params || !req.params.id) return res.sendStatus(400)
  const id = req.params.id
  const todo = Todos.delete(id)
  res.status(200).json(todo)
}
