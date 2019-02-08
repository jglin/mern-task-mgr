const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { Task } = require('./models/Task');

const app = express();

// start up the mongo database
require('./modules/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/tasks', (req, res) => {
  console.log(`post /tasks req.body: ${req.body}`);
  let task = new Task({
    title: req.body.title
  });
  task.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get('/tasks', (req, res) => {
  Task.find().then(
    tasks => {
      res.send({ tasks });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get('/tasks/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Task.findById(id)
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }

      res.send({ task });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.delete('/tasks/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Task.findByIdAndRemove(id)
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }

      res.send({ task });
    })
    .catch(e => {
      res.status(400).send();
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = { app };
