var express = require('express')
var app = express()
const mongoose = require('mongoose');
process.env.IDLEN = 8;  


var DiseaseRoutes = require('./gtbh/routes/DiseaseRoutes')
var HospitalServiceRoutes = require('./gtbh/routes/HospitalServiceRoutes')
var NoteRoutes = require('./gtbh/routes/NoteRoutes')
var GenricUserRoutes = require('./gtbh/routes/GenricUserRoutes')
var PKeyRoutes = require('./gtbh/routes/PKeyRoutes')

app.use('/gtbh/disease', DiseaseRoutes);
app.use('/gtbh/hospitalservice', HospitalServiceRoutes);
app.use('/gtbh/note', NoteRoutes);
app.use('/gtbh/genricuser', GenricUserRoutes);
app.use('/gtbh/pkey', PKeyRoutes);


app.set('HOST', 'https://juntos-app.herokuapp.com/');
var prodDb = process.env.MONGODB_URI || 'mongodb://heroku_1p064jhh:qavvnalti9jomn7j2dft02726@ds161224.mlab.com:61224/heroku_1p064jhh';
 

// var locDb = "mongodb://localhost/juntos"
// mongoose.Promise = global.Promise;

mongoose.connect(prodDb, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.all("/_backup", function (req, res) {

    res.write('<html><head><title>Taking backup</title></head>');
    const backup = require('./backup')(mongoose.connection.db, (txt) => {
        console.log(txt)
        try {
            res.write(txt + "<br>");
        } catch (E) { }
    }, (txt) => {
        // console.log(txt)

        try {
            res.write(txt + "<br></html>");
            res.end();
        } catch (E) { }

    });
    backup.dump()

})

app.listen(process.env.PORT || 5542, function () {
    console.log("Server Started At ", process.env.PORT || 5542)

})
