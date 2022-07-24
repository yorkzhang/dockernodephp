//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("please access http://%s:%s", host, port)

})
