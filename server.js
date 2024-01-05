var dt = require("./modules/date-time-module");
var http = require("http");
var url = require("url");
var fs = require("fs");

const testOne = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("<br/>");
  res.write("Request URL : " + req.url);
  res.write("<br/>");
  var query = url.parse(req.url, true).query;
  res.write("Query parameters : " + query.firstname + " " + query.lastname);
  res.end();
};

const testTwo = (req, res) => {
  fs.readFile("./files/test-file-1.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

const testThree = (req, res) => {
  fs.appendFile(
    "./files/test-file-2.js",
    "console.log('Hello World!')",
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    }
  );
};

const testFour = (req, res) => {
  fs.open("./files/test-file-2.js", "r", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};

http
  .createServer((req, res) => {
    // testOne(req, res);
    // testTwo(req, res);
    // testThree(req, res);
    testFour(req, res);
  })
  .listen(8080);
