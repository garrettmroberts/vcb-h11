var express = require("express");
var path = require("path");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const PORT = 5050;

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});