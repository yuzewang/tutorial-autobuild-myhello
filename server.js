var http = require("http");
var os = require("os");
http.createServer(function(request, response) {
    console.log("New request arrived.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("2015-12-15 18:06:00 Welcome to wangyuze's website! you are visiting " + os.hostname() + "\n");
    response.end();
}).listen(9000);
console.log("nodejs Server is running, listening on port 80....");
