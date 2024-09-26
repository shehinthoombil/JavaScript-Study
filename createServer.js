//create server
// const http = require("http");
// http.createServer((req,res)=>{
//     res.write("server created2")
//     res.end();
// }).listen(3001,()=> console.log("server is running"))

///create server using express
// const express = require("express")
// const app = express();
// app.use('./',(req,res,next)=>{
//     res.send("This is middleware")
//     next();
// }).listen(7000,()=>console.log("middlware running"))

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running at port 3000');
});
