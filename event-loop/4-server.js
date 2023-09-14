const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("request event");
    res.end("hello there");
})

server.listen('5000',()=>{
    console.log("server is listening on port 5000")
})


//output
//server is listening on port 5000
// request event
// request event
// request event
// request event-> whenever the port 5000 is hit then the callback will be executed
