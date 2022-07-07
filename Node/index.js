// console.log("Hello World!");

const http = require("http");
// Importing http using request

const requestListener = (request,response) => {
    // if(request.originalUrl)
    console.log(request.url)
    response.write('SSHSRN!');
    // Writing to the document
    response.end();
    // Completes the write function
}

const server = http.createServer(requestListener);

server.listen(5000, () => {
    console.log("Server Running on Port 5000!");
});