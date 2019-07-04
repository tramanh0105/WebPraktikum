let options = { year: 'numeric',
                month: 'numeric',
                day: 'numeric'};
class Seminar{
constructor(titel, seminarleiterName, ort,jahr, monat,datum, startzeit,endzeit, freiePlaetze, verfügbarePlaetze, tutoren){
  this.titel = titel;
  this.seminarleiterName = seminarleiterName;
  this.ort = ort;
  this.startzeit = new Date(jahr,monat,datum,startzeit).toLocaleString("de-DE",options);
  this.endzeit = new Date(jahr,monat,datum,endzeit);
  this.freiePlaetze = freiePlaetze;
  this.verfügbarePlaetze = verfügbarePlaetze;
  this.tutoren = tutoren;
}
/*Berechnung belegter Plaetze*/

  berechnenBelegterPlaetze (verfügbarePlaetze, freiePlaetze){
  return verfügbarePlaetze - freiePlaetze;
}
}

let tutoren = ["ane1","tim2"];

let seminar1 = new Seminar('NodeJs','Herr Jörges','A.E.01',2019,4,19,10,13, 12,100,tutoren);
let seminar2 = new Seminar('Angular','Herr Jörges','A.E.01',2019,4,19,15,17, 30,100,tutoren);
let seminar3 = new Seminar('Firebase','Herr Jörges','A.E.01',2019,4,20,10,12, 20,100,tutoren);

//array declaration and initialization
 let arraySeminar = new Array;
 arraySeminar.push(seminar1);
 arraySeminar.push(seminar2);
 arraySeminar.push(seminar3);

 /*sorting array*/
 arraySeminar.sort(function(a,b){
   return a.startzeit - b.startzeit;
 });

module.exports ={
  seminars : arraySeminar
}
