const router = require('express').Router();
const path = require('path');

let title ="";
router.get('/',function(req,res,next){
  title ="Dashboard";
  let stylePath = "css/dashboard.css";
  res.render('dashboard',{kindOfTitle : title,kindOfPath:stylePath });
});

router.get('/seminarliste', function(req, res,next){
    title ="Liste der verfügbaren Seminare";
    let stylePath = "css/flexbox.css";
    res.render('seminarliste',{kindOfTitle : title,kindOfPath:stylePath });
});

router.get('/seminardetail',function(req,res,next){
    title ="Algorithmen und Datenstruktur";
    let stylePath = "css/flexbox.css";
    res.render('seminardetail',{kindOfTitle : title,kindOfPath:stylePath });

});
router.get('/seminarleiter',function(req,res,next){
  title ="Seminarleiter";
  let stylePath = "css/grid.css";
  res.render('seminardetail',{kindOfTitle : title,kindOfPath:stylePath });
});
router.get('/seminarAnlegen',function(req,res,next){
  title ="seminarAnlegen";
  let stylePath = "css/grid.css";
  res.render('seminarAnlegen',{kindOfTitle : title,kindOfPath:stylePath });
});
router.use(function(req,res,next){
  title ="404 Not Found";
  let stylePath = "css/grid.css";
  res.render('404',{kindOfTitle : title,kindOfPath:stylePath });
});

module.exports =router;
