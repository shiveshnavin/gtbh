
  
var fs=require('fs');
 
async function log(arg)
{
    //console.log(arg);
    update(arg)
}
var maxC=0;
var curC=1;
async function process(n){

    var coll = db.collection(n.name)
    var count = await coll.countDocuments()
    log(n.name+ "   =   "+count);
    await coll.find()
    .toArray((err, results) => {
        if(err) throw err;

        output[n.name]=results;
        log("Dumped "+n.name+" ("+curC+"/"+maxC+")");
        if(maxC>curC)
        {
            curC++;
        }
        else{ 
            log("\n\n All Dumps completed !!");
            log("Uploading to GCS bucket....")
            write();
        }
    }) 
};

async function write()
{
   // fs.writeFile(file,JSON.stringify(output));
//const FileUpload = require('./app/controllers/fileupload.controller')(null,null);
    // FileUpload.uploadDataToCloud({
    //     name:file,
    //     blob:JSON.stringify(output)
    // },function(data){
    //     console.log(data.url)
    //     finish("Done !");
    // })
}

function getDateString() {
     var d = new Date();

    var datestring = d.getFullYear()  + "" + (d.getMonth()+1) + "" + d.getDate() + "_" +
    d.getHours() + "" + d.getMinutes();

    return datestring;
}

var output={};
var file;
var db;
async function dump(){
    file="dumps/dump_"+getDateString()+".json";
    log("Dumps Saved to "+file);
    db.listCollections().toArray(function (err, names) {
        if(maxC == 0)
        {
            maxC = names.length;
        }
        names.forEach(process)
    });

}

var update;
var finish;

module.exports = function (dbc, upd,fin) {
    var module = {};

    if(upd==undefined || dbc == undefined)
    {
        fin("No DB Connection");
        return
    }
    db=dbc;
    update=upd;
    finish=fin;
    module.dump =  dump
    return module;
};
