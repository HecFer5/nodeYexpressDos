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


app.get("/", function (req, res) {
    if (mySecret === "uppercase") {
    respuesta = { "message": "HELLO JSON" }
    res.json(respuesta);
}else{
  respuesta = { "message": "Hello json" }
  res.json(respuesta);
}

    
});