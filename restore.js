 
const mongoose = require('mongoose');
 
var fs = require('fs');
var prodDb = "mongodb://heroku_1p064jhh:qavvnalti9jomn7j2dft02726@ds161224.mlab.com:61224/heroku_1p064jhh";

// var isDev = process.env.IS_DEV == 1;
// if(isDev)
// {
// console.log("SWITCHING TO DEV PROFILE");
// app.set('HOST', 'https://juntos-app.herokuapp.com/');
// prodDb="mongodb+srv://junto:juntos@juntos-0v96x.gcp.mongodb.net/dev_test?retryWrites=true&w=majority";
// }

var locDb = "mongodb://localhost/juntos"
mongoose.Promise = global.Promise;

mongoose.connect(prodDb, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
    load();
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

var maxC = 0;
var curC = 1;
async function process(n) {

    try {


        var collData = data[n];
        var coll = db.collection(n);
        collData.forEach((cd) => {
            cd._id = mongoose.Types.ObjectId(cd._id)
        })
        await coll.insertMany(collData)
        var count = await coll.countDocuments()
        console.log(n, "   =   ", count);
    } catch (er) {
        console.log("error in " + n);
    }
    if (maxC > curC) {
        curC++;
    }
    else {
        console.log("\n\n All Data restore completed !!");
    }

};

async function dups(n) {
    var coll = db.collection(n);
    await coll.aggregate(
        { "$group": { "_id": "$name", "count": { "$sum": 1 } } },
        { "$match": { "_id": { "$ne": null }, "count": { "$gt": 1 } } },
        { "$project": { "name": "$_id", "_id": 0 } }
    )
        .toArray((err, results) => {
            if (err) throw err;
            console.log("===", results);

        })
}
var output = {};
var file = "./dumps/dumps_dump_2020410_2030.json";
var data = fs.readFileSync(file);
data = JSON.parse(data);
var db = mongoose.connection.db;
async function load() {


    db = mongoose.connection.db;

    var v = Object.keys(data)
    console.log(v);
    if (maxC == 0) {
        maxC = v.length;
    }
    v.forEach(process);

}
