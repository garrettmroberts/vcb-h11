var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

var db = require("../db/db.json");

module.exports = function(app) {
  // Returns db.json data
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  // Sends new note to db.json
  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json("Success");
  });

  // Deletes selected note by id
  app.delete("/api/notes/:id", function(req, res) {
    var id = req.params.id;

    for (var i = 0; i < db.length; i++) {
      if (id === db[i].id) {
        db.splice(i, 1);
      }
    }
    
    res.json(db);
  });
};