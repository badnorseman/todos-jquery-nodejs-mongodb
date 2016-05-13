'use strict'
let Storage = function() {
  this.items = {}
  this.id = 0
}

Storage.prototype.create = function(text) {
  const id = this.id
  const item = { text, id }
  this.items = Object.assign({}, this.items, { [id]: item })
  this.id += 1
  return item
}

Storage.prototype.retrieveAll = function() {
  return this.items
}

Storage.prototype.update = function(id, text) {
  if (isNaN(id) || !text) return 'not valid'
  let item
  if (this.items[id]) {
    item = this.items[id]
    item.text = text
    this.items = Object.assign({}, this.items,
      Object.keys(this.items).reduce((result, key) => {
        if (key === id) { result[key] = item }
        return result
      }, {}))
  } else {
    item = this.create(text)
  }
  return item
}

Storage.prototype.delete = function(id) {
  if (isNaN(id)) return 'not valid'
  if (!this.items[id]) return 'not found'
  const item = this.items[id]
  this.items = Object.assign({},
    Object.keys(this.items).reduce((result, key) => {
      if (key !== id) { result[key] = this.items[key] }
      return result
    }, {}))
  return item
}

const Todos = new Storage()

module.exports = Todos
