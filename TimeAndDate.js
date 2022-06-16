const http = require("http");
var dt = require('./ModuleImport');

const hostName = "127.0.0.1";
const port = 3000;



var CheckServer = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
})

CheckServer.listen(port , hostName , ()=>{
    console.log (`sever started at http://${hostName}:${port}`);
});
