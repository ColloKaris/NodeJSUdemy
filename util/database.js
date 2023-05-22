const mongodb = require('mongodb');

//extract mongo client constructor
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  //connect to the MongoDB database
  MongoClient.connect('mongodb+srv://collinsmunkary:8ADEBIOKzJBVRPMY@cluster0.kiles44.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!')
    callback(client);
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = mongoConnect;

