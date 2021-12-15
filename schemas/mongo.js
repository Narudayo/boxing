const mongo = require('mongodb')

const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    const dbo = db.db("boxing");
    console.log("잡았따!")
    // dbo.createCollection("usersss", function(err,res){
    //     if(err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // })
})