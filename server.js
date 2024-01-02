var dt = require("./modules/date-time-module");
var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("The date and time are currently: " + dt.myDateTime());

    res.write("<br/>");

    res.write("Request URL : " + req.url);

    res.write("<br/>");

    var query = url.parse(req.url, true).query;
    res.write("Query parameters : " + query.firstname + " " + query.lastname);

    // fs.readFile("./files/test-file.html", (err, data) => {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   return res.end();
    // });

    res.end();
  })
  .listen(8080);
