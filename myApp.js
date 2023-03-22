let express = require('express');
let app = express();

module.exports = app;

// rutaIndex = __dirname + "/views/index.html"
// rutaEstilo = __dirname + "/public/"
// app.use("/public",express.static(rutaEstilo));

app.get("/json", function (req, res) {
    res.json({"message": "Hello json"});
});
 




































