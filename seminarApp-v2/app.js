/*jshint esversion:6 */
const express = require("express");
const app = express();
//Modul mit den Routen einbinden
const router = require("./routes/routes.js");

app.use(express.static(__dirname+'/public'));
app.use(router);
app.set('view engine', 'ejs');


app.listen(8040, function(){
    console.log('server is listening on port 8040');
});
