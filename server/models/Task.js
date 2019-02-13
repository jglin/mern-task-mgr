let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: String,
      default: 'undone',
      required: true
    },
    completedAt: {
      type: Date,
      default: null //'2017-06-01'
    }
  },
  { collection: 'tasks' }
);

module.exports = mongoose.model('Task', TaskSchema);
