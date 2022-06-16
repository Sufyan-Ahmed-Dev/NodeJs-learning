const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;


const server = http.createServer((req,res)=>{
res.statusCode = 200;
res.setHeader("content-type" , "text/plane");
res.end("Hello World this is my first node server");

})

server.listen(port , hostName , ()=>{
    console.log (`sever started at http://${hostName}:${port}`);
});

