const fs = require('fs');
const http = require('http');
const template = require("./template.js");
const seminars = require("./seminars.js");
const server = http.createServer(function(req, res) {
    const method = req.method;
    const url = req.url;

  if (url === "/" && method === "GET") {
    fs.readFile(__dirname + "/public/dashboard.html", function(err, data) {
      res.writeHead(200);
      res.end(data);
    });
  } else if (url === "/seminarliste.html" && method === "GET") {
    res.writeHead(200);
      res.end(template.seminarListe(seminars.seminars));
  } else if (method === "GET") {
    fs.readFile(__dirname + '/public' + url, function(err, data) {
      if (err) {
        fs.readFile(__dirname + '/public/404.html', function(err, data) {
          res.writeHead(404);
          res.end(data);
        });
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
});
server.listen('8020', function() {
  console.log('Server is listening on port 8020');
});
