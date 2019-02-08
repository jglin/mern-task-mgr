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
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Date,
      default: null
    }
  },
  { collection: 'tasks' }
);

module.exports = mongoose.model('Task', TaskSchema);
