let express = require('express');
let app = express();

module.exports = app;

rutaIndex = __dirname + "/views/index.html"
rutaEstilo = __dirname + "/public/style.css"

app.get("/", function (req, res) {
    res.sendFile(rutaIndex);
});
 app.use("/",rutaEstilo)




































