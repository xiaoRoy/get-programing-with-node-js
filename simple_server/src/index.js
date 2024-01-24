const http = require("http");
const httpStatus = require("http-status-codes");

const port = 3000;
const app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {"Content-Type": "text/html"});
    let responseMessages = "<h1>Hello, Universe!</h1>";
    response.write(responseMessages);
    response.end();
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);