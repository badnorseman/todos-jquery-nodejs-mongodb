const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const should = chai.should()

chai.use(chaiHttp)

describe('Todos', function() {
  it('should retrieve todos on get', function(done) {
    chai.request(app)
      .get('/todos')
      .end(function(err, res) {
        res.should.have.status(200)
        done()
      })
  })
  it('should create a todo on post')
  it('should update a todo on put')
  it('should delete a todo on delete')
})
