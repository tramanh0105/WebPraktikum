const fs = require('fs');
const http = require('http');
const url = require('url');
const server = http.createServer(function(req,res){
const template = require("./template");
const url = req.url;
const method = req.method;

  if(url ==='/' && method ==='GET'){
    fs.readFile (__dirname+'/public/dashboard.html',function(err,data){
      //  Statuscode und Header schreiben
          res.writeHead(200);
          res.end(data);
      });
} else if (url === '/seminarliste.html' && method ==='GET') {
      res.end(template.semList());
  }else if(method==='GET'){
    fs.readFile(__dirname+'/public'+url, function(err, data){
      if(err){
        fs.readFile(__dirname+'public/404.html',function(err,data){
          res.writeHead(404);
          res.end(data);
        });
        }
          res.writeHead(200);
          res.end(data);
        });
      }else{
        res.writeHead(200);
        res.end(data);
  }
});
server.listen('8020',function(){
  console.log('Server is listening on port 8020');
});
