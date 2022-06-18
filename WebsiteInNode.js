const http = require("http");
const hostName = "127.0.0.1";
const port = 4000;

const server = http.createServer((req,res)=>{
    res.setHeader("content-type" , "text/html");
    if(req.url == "/"){
        res.statusCode = 200;
        res.end("My fisrt web page")
    }
    else if (req.url =="/about"){
        res.statusCode = 200;
        res.end("This is about page")
    }
    else if (req.url == "/contact"){
        res.statusCode = 200;
        res.end("This is contact page")
    }
    else if (req.url == "/login"){
        res.statusCode = 200;
        res.end("This is login page")
    }
    else{
        res.statusCode = 404;
        res.end("Not Found")
    }

})

server.listen(port , hostName , ()=>{
    console.log (`sever started at http://${hostName}:${port}`);
});

