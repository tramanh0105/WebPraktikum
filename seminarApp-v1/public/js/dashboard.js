document.getElementById('addDiv').addEventListener('click',function(){
    let titel = prompt("Bitte geben Sie Titel ein!");
    let url = prompt("Bitte geben Sie URL ein!");

    addKacheln(titel,url);
});

function addKacheln(titel, url){
    let plusKacheln = document.getElementById('addDiv');

    let newKacheln = document.createElement('div');
    newKacheln.setAttribute('class','box');

    let header = document.createElement('h3');

    let link = document.createElement('a');
    link.textContent =titel;
    link.href = url;

    header.appendChild(link);

    newKacheln.appendChild(header);

    plusKacheln.before(newKacheln);
}