const express = require('express')
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname,"dist")))

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("I'm running");
})