const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const should = chai.should()

chai.use(chaiHttp)

describe('Todos', function() {
  it('should create a todo on post', function(done) {
    const name = 'Learning nodejs'
    chai.request(app)
      .post('/todos')
      .send({ name })
      .end(function(err, res) {
        res.should.have.status(201)
        res.should.be.json
        res.body.id.should.be.a('number')
        res.body.name.should.equal(name)
        done()
      })
  })
  it('should retrieve todos on get', function(done) {
    chai.request(app)
      .get('/todos')
      .end(function(err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body[0].id.should.be.a('number')
        res.body[0].name.should.a('string')
        done()
      })
  })
  it('should update a todo on put', function(done) {
    const name = 'Learning nodejs is fun'
    chai.request(app)
      .put('/todos/0')
      .send({ 'id': 0, name })
      .end(function(err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.id.should.be.a('number')
        res.body.name.should.equal(name)
        done()
      })
  })
  it('should delete a todo on delete', function(done) {
    const name = 'Learning nodejs is fun'
    chai.request(app)
      .delete('/todos/0')
      .send({ 'id': 0 })
      .end(function(err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.id.should.be.a('number')
        res.body.name.should.equal(name)
        done()
      })
  })
})
