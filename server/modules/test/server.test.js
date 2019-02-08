const expect = require('chai').expect;
const request = require('supertest');
const axios = require('axios');

const { app } = require('./../../server');
const { Task } = require('./../../models/Task');

// beforeEach(done => {
//   Task.remove({}).then(() => done());
// });

describe('POST /tasks', () => {
  it('should create a new task', done => {
    const title = 'Test task title';

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!Running axios');
    const url = 'http://localhost:5000/tasks';
    axios
      .post(url, {
        title: 'foobar'
      })
      .then(response => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!Response Running axios');
        console.log(response.data);
      })
      .catch(e => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!ERROR Running axios');
        console.log(e);
      });

    request(app)
      .post('/tasks')
      .send({ title })
      .expect(200)
      .expect(res => {
        expect(res.body.title).to.equal(title);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Task.find()
          .then(tasks => {
            expect(tasks.length).to.equal(1);
            expect(tasks[0].title).to.equal(title);
            done();
          })
          .catch(e => done(e));
      });
  });

  it('should not create task with invalid body data', done => {
    request(app)
      .post('/tasks')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Task.find()
          .then(tasks => {
            expect(tasks.length).to.equal(0);
            done();
          })
          .catch(e => done(e));
      });
  });
});
