// import react from 'react'  => es6 module
// const react = require('react') => commonjs module
const http = require("http");
const myModuleVariables = require("./myModule");

console.log(myModuleVariables.myVariable);
myModuleVariables.myFunction()
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, world!");
});
98761
const port = 3000;
server.listen(3000, function () {
  console.log("Server started on port 3000");
});
