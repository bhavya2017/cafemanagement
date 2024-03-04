var express = require("express");
var parser = require("body-parser");
var multer = require("multer");
var MongoClient = require("mongodb").MongoClient;
var upload = multer();
var db_url = "mongodb://127.0.0.1:27017";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(parser.json());
//app.use(upload.array());

app.post("/", (req, res) => {
  console.log(req.body);
  MongoClient.connect(db_url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("cafe");
    var obj = req.body;

    dbo.collection("orders").insertOne(obj, function (err, res) {
      if (err) throw err;
      console.log("Inserted..");
      db.close();
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
