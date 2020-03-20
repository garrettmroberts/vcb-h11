var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

var db = require("../db/db.json");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json("Success");
  });

  app.delete("/api/notes/:id", function(req, res) {
    var id = req.params.id;

    for (var i = 0; i < db.length; i++) {
      if (id === db[i].id) {
        db.splice(i, 1);
      }
    }
    // db.forEach((item, index) => {
    //   if (id === item.id) {
    //     db = db.slice(0, index) + db.slice(index + 1);
    //   };
    // });
    res.json(db);
  });
};