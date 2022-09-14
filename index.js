const express = require('express')
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname,"dist0913")))

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("I'm running");
})
