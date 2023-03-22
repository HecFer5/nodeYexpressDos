let express = require('express');
let app = express();
require('dotenv').config()

module.exports = app;

// rutaIndex = __dirname + "/views/index.html"
// rutaEstilo = __dirname + "/public/"
// app.use("/public",express.static(rutaEstilo));
let mensaje = { "message": "Hello json" }
let respuesta = ""

if (process.env.MESSAGE_STYLE === "uppercase") {
    respuesta = mensaje.toUppercase
}

app.get("/", function (req, res) {
    res.json(mensaje);
});





































