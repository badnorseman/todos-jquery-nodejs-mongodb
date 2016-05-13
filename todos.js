'use strict'
const Todos = require('./models/todos')

exports.create = (req, res) => {
  if (!req.body || !req.body.text) return res.sendStatus(400)
  const todo = { text: req.body.text }
  Todos.create(todo, (err, todo) => {
    if (err || !todo) return res.status(500).json({ err })
    res.status(201).json({ todo })
  })
}

exports.retrieveAll = (req, res) => {
  Todos.find((err, todos) => {
    if (err) return res.status(500).json({ err })
    if (todos.length === 0) return res.status(204).end()
    res.status(200).json(todos)
  })
}

exports.update = (req, res) => {
  if (!req.params || !req.params.id || !req.body || !req.body.text) return res.sendStatus(400)
  const id = { _id: req.params.id }
  const todo = { text: req.body.text }
  Todos.findOneAndUpdate(id, todo, (err, todo) => {
    if (err) return res.status(500).json({ err })
    res.status(200).json(todo)
  })
}

exports.delete = (req, res) => {
  if (!req.params || !req.params.id) return res.sendStatus(400)
  const id = { _id: req.params.id }
  Todos.findOneAndRemove(id, (err, todo) => {
    if (err) return res.status(500).json({ err })
    res.status(200).json(todo)
  })
}
