let express = require('express');
let app = express();

module.exports = app;

ruta = __dirname + "/viwes/"

app.get("/", function (req, res) {
    res.sendFile(ruta);
});

//app.get("Hello World")


































