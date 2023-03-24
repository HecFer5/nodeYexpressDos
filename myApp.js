let express = require('express');
let app = express();
require('dotenv').config()

module.exports = app;

// rutaIndex = __dirname + "/views/index.html"
// rutaEstilo = __dirname + "/public/"
// app.use("/public",express.static(rutaEstilo));
let mensaje = { "message": "Hello json" }
let respuesta
const mySecret = process.env['MESSAGE_STYLE']

if (mySecret === "uppercase") {
    respuesta = { "message": "Hello json" }.toUpperCase()
}else{
  respuesta = { "message": "Hello json" }
}

app.get("/", function (req, res) {
    res.json(respuesta);
});