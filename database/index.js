const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authdb');
mongoose.Promise = global.Promise;

module.exports = mongoose;