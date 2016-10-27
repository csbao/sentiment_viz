//var nyt = require('newyorktimes')(keys);
//nyt.query('http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=US', function (err, json) {
//  console.log(json);
//});

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

MongoClient.connect(url, function(err,db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});
