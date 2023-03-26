let express = require('express');
let app = express();

module.exports = app;
 
app.use("/public",express.static(__dirname + "/public/"));

app.use((req, res ,next) =>{
  console.log(`${req.method}${req.path} - ${req.ip}`);
  next()
  
})

//app.get("/",(req, res)=>{
//  res.sendFile(__dirname + "/views/index-html")
//})
let respuesta
app.get("/", function (req, res) {
    if (process.env['MESSAGE_STYLE'] == "uppercase") {
  respuesta =  {"message": "HELLO JSON"};
}else{
  respuesta = {"message": "Hello json"}
}
res.json(respuesta);
    
});