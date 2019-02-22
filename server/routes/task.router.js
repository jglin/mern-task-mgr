const router = require('express').Router();
const Task = require('../models/Task');
const { ObjectID } = require('mongodb');

router.get('/', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    // find all
    Task.find()
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    // Need some error handling here
    let startDate = req.query['startDate'];
    let endDate = req.query['endDate'];
    // find between dates
    Task.find({
      completedAt: { $gte: startDate, $lt: endDate }
    })
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
  }
});

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
  //console.log('Req: ', req);
  let task = new Task({
    title: req.body.title,
    completed: req.body.completed,
    completedAt: req.body.completedAt
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

router.delete('/:id', (req, res) => {
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

// returns objects with scanTime (date) sitesScanned (number)
// just returns most recent scan
// router.get('/', (req, res) => {
//   Scan.find({})
//     .sort({ scanTime: -1 })
//     .limit(1)
//     .then(response => {
//       res.send(response);
//     })
//     .catch(error => {
//       console.log(error);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
