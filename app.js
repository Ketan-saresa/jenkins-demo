var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World This is first push...");
});

app.listen(4000);