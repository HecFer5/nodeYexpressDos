let express = require('express');
let app = express();

module.exports = app;

rutaIndex = __dirname + "/views/index.html"
rutaEstilo = __dirname + "/public/"

app.get("/", function (req, res) {
    res.sendFile(rutaIndex);
});
 
app.use("/public",express.static(rutaEstilo));




































