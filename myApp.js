let express = require('express');
let app = express();

module.exports = app;

ruta = __dirname + "/viwes/index.html"

app.get("/", function (req, res) {
    res.sendFile(ruta);
});

//app.get("Hello World")


































