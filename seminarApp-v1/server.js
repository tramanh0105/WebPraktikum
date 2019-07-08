const fs = require('fs');
const http = require('http');
// const url = require('url');
const template = require("./template.js");

const server = http.createServer(function(req, res) {
    const method = req.method;
    const url = req.url;
    //=====SeminarObject Constructor======/
    class Seminar {
      constructor(titel, seminarleiterName, ort, jahr, monat, datum, startzeit, endzeit, freiePlaetze, verfügbarePlaetze, tutoren) {
        this.titel = titel;
        this.seminarleiterName = seminarleiterName;
        this.ort = ort;
        this.startzeit = new Date(jahr, monat, datum, startzeit);
        this.endzeit = new Date(jahr, monat, datum, endzeit);
        this.freiePlaetze = freiePlaetze;
        this.verfügbarePlaetze = verfügbarePlaetze;
        this.tutoren = tutoren;
      }
      /*Berechnung belegter Plaetze*/

      berechnenBelegterPlaetze(verfügbarePlaetze, freiePlaetze) {
        return verfügbarePlaetze - freiePlaetze;
      }
    }
  let tutoren = ["ane1", "tim2"];

  let seminar1 = new Seminar('NodeJs', 'Herr Jörges', 'A.E.01', 2019, 4, 19, 10, 13, 12, 100, tutoren);
  let seminar2 = new Seminar('Angular', 'Herr Jörges', 'A.E.01', 2019, 4, 19, 15, 17, 30, 100, tutoren);
  let seminar3 = new Seminar('Firebase', 'Herr Jörges', 'A.E.01', 2019, 4, 20, 10, 12, 20, 100, tutoren);

  //array declaration and initialization
  const arraySeminar = new Array;
  arraySeminar.push(seminar1);
  arraySeminar.push(seminar2);
  arraySeminar.push(seminar3);

  /*sorting array*/
  arraySeminar.sort(function(a, b) {
    return a.startzeit - b.startzeit;
  });
  //===================================/

  if (url === "/" && method === "GET") {
    fs.readFile(__dirname + "/public/dashboard.html", function(err, data) {
      res.writeHead(200);
      res.end(data);
    });
  } else if (url === "/seminarliste.html" && method === "GET") {
    res.end(template.createHTML());
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
