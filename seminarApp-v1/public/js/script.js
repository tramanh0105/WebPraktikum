// function getViewportWidth() {
//   return window.innerWidth || document.documentElement.clientWidth;
// }
//
// let viewport = "Die Viewport-Breite beträgt: "+getViewportWidth()+" Pixel";
// console.log(viewport);

/*Objekt Seminar*/
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
  // /*Berechnung belegter Plaetze*/

  berechnenBelegterPlaetze(verfügbarePlaetze, freiePlaetze) {
    return verfügbarePlaetze - freiePlaetze;

  }
}

// /*Instanzen und Array*/
let tutoren = ["ane1", "tim2"];

let seminar1 = new Seminar('NodeJs', 'Herr Jörges', 'A.E.01', 2019, 4, 19, 10, 13, 12, 100, tutoren);
let seminar2 = new Seminar('Angular', 'Herr Jörges', 'A.E.01', 2019, 4, 19, 15, 17, 30, 100, tutoren);
let seminar3 = new Seminar('Firebase', 'Herr Jörges', 'A.E.01', 2019, 4, 20, 10, 12, 20, 100, tutoren);

//array declaration and initialization
let arraySeminar = new Array;
arraySeminar.push(seminar1);
arraySeminar.push(seminar2);
arraySeminar.push(seminar3);

/*sorting array*/
arraySeminar.sort(function(a, b) {
  return a.startzeit - b.startzeit;
});

/*Option toLocaleString*/
let options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};
/*Ausgabe*/
for (let i = 0; i < arraySeminar.length; i++) {
  let s = arraySeminar[i];
  let time = s.startzeit.toLocaleString('de-DE', options);
  let seat = s.berechnenBelegterPlaetze(s.verfügbarePlaetze, s.freiePlaetze);
  console.log(`${s.titel}, (${time}, ${seat} von ${s.verfügbarePlaetze} Plaetzen belegt) `);
}

/*Tabele der Seminar erzeugen*/
function addSem(sem, index) {
  let table = document.getElementById('table').getElementsByTagName('tbody')[0];
  // console.log(table);

  //Insert a row in the table at the last row
  let newRow = table.insertRow();

  //Insert new cells
  let newCell1 = newRow.insertCell(0);
  let newCell2 = newRow.insertCell(1);
  let newCell3 = newRow.insertCell(2);
  let newCell4 = newRow.insertCell(3);
  let newCell5 = newRow.insertCell(4);

  //Insert data to new cells
  let ind = document.createTextNode(index);
  newCell1.appendChild(ind);

  let raum = document.createTextNode(sem.ort);
  newCell2.appendChild(raum);

  let titelLink = document.createElement('a');
  titelLink.textContent = sem.titel;
  titelLink.href = '/aud.html';
  newCell3.appendChild(titelLink);

  let date = sem.startzeit.toLocaleString('de-DE');
  let datum = document.createTextNode(date);
  newCell4.appendChild(datum);

  let ort = document.createTextNode('Emil-Fiege Straße 40');
  newCell5.appendChild(ort);
}

//add an array to table
function addListSem(semArray) {
  for (let ind = 1; ind <= semArray.length; ind++) {
    addSem(semArray[ind - 1], ind);
  }
}

let sortedArray = [seminar1, seminar2, seminar3];

module.exports.addItem = function() {
    let result = "";
    for (let i = 0; i < sortedArray.length; i++) {
      if (typeof sortedArray[i] !== "undefined") {
        result += `<tr>
                  <td>${i+1}</td>
                  <td>${sortedArray[i].ort}</td>
                  <td><a href="aud.html">${sortedArray[i].titel}</a></td>
                  <td>${sortedArray[i].startzeit.toLocaleString('de-DE',options)}</td>
                  <td>Emil-Fiege-Straße 40</td>
                </tr>`;
      }
    }
    return result;
  };

// addListSem(sortedSemina);
