var http = require("http");
var os = require("os");
http.createServer(function(request, response) {
    console.log("New request arrived.");
    console.log("New request add.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Welcome to yuze's website! you are visiting " + os.hostname() + "\n");
    response.end();
}).listen(80);
console.log("nodejs Server is running, listening on port 80....");
