const http = require("http");
const fs = require("fs");


hostname = "127.0.0.1";
port = 5000;

var server = http.createServer(function (req, res) {
    fs.readFile("index.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  })


server.listen(port , hostname ,()=>{
    console.log(`server start at this link hover it http://${hostname}:${port}`)
})
