const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TaskMgr');

module.exports = { mongoose };

// /* Mongo Connection */
// let mongoURI = '';

// // process.env.MONGODB_URI will only be defined if you are running on Heroku
// if (process.env.MONGODB_URI) {
//   // Heroku will provide this when deployed
//   // use the string value of the environment variable
//   mongoURI = process.env.MONGODB_URI;
// } else if (process.env.DATABASE) {
//   // use database provided in the .env file
//   mongoURI = `mongodb://${process.env.DATABASE}`;
// } else {
//   // use the local database server
//   mongoURI = 'mongodb://localhost:27017/CB';
// }
// debug(mongoURI);
// mongoose.connect(mongoURI);

// mongoose.connection.once('open', () => {
//   debug('Mongo connected');
// });

// mongoose.connection.on('error', err => {
//   console.log('Error on mongoose connection: ', err);
// });
