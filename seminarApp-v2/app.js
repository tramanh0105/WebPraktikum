/*jshint esversion:6 */

const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'));

app.listen(8040, function(){
    console.log('server is listening on port 8040');
});

app.get('/', function(req, res){
    res.sendFile(__dirname+'/public/dashboard.html');
});
app.get('/seminarliste',function(req,res){
    res.sendFile(__dirname+'/public/seminarliste.html');
});
app.get('/seminardetail',function(req,res){
    res.sendFile(__dirname+'/public/aud.html');
});
app.get('/seminarleiter',function(req,res){
    res.sendFile(__dirname+'/public/rett.html');
});
app.get('/seminarneu',function(req,res){
    res.sendFile(__dirname+'/public/seminarAnlegen.html');
});
