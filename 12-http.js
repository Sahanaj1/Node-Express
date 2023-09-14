const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("welcome")
        res.end();
    }
    if(req.url==='/about'){
        res.write("about us")
        res.end();
    }

    // res.write("404")
    res.end("404");
})

server.listen(5000)