import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

export default () => {
  const dbPromise = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  dbPromise.then(db => {
    if(db) console.log('dbconnected');
    return db;
  });

  require('../models')

  return dbPromise;
}
