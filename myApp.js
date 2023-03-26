let express = require('express');
let app = express();
require('dotenv').config()

//module.exports = app;
console.log("Hola")
rutaIndex = __dirname + "/views/index.html"
rutaEstilo = __dirname + "/public/"
app.use("/public",express.static(rutaEstilo));



app.get("/", function (req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
    
    res.json({ "message": "HELLO JSON" });
}else{
  res.json({ "message": "Hello json" });
}

    
});
