const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
let groups;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db('karmabot');
  groups = db.collection('groups');
});

module.exports = {
  groups: () => groups,
}
