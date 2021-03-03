var h1 = document.getElementById('titolo');
console.log(h1);
h1.innerHTML = 'Titolo modificato';

var paragrafi = document.getElementsByClassName('paragrafo');
console.log(paragrafi);
paragrafi.item(0).innerHTML = 'paragrafo modificato';

var importanti = document.getElementsByClassName('importante');
console.log(importanti.item(0).style.backgroundColor);

setTimeout(() => {
    importanti.item(0).style.backgroundColor = 'red';
}, 2000); // dopo 2 secondi...


var links = document.getElementsByTagName('a');
setTimeout(() => {
    links.item(0).className = 'recente';
}, 5000); // dopo 2 secondi...

