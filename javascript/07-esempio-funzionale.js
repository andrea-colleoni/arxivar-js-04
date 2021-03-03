var persone = [];
persone[0] = {
    nome: 'Mario',
    cognome: 'Rossi',
    citta: 'Milano',
}
persone.push({
    nome: 'Anna',
    cognome: 'Verdi',
    citta: 'Brescia',
});
persone.push({
    nome: 'Luigi',
    cognome: 'Bianchi',
    citta: 'Milano',
});
// voglio stampare in console le persone di Milano
// approccio procedurale
for (var i = 0; i < persone.length; i++) {
    if (persone[i].citta == 'Milano') {
        console.log(persone[i]);
    }
}
console.log("===========================================");
// approccio funzionale (le collezioni (array) hanno già costruite built-in
// delle funzioni per lavorare in modo funzionale)
// var risultato = 
//    persone.filter((p) => p.citta == 'Milano').forEach((p) => console.log(p));
/*
// equivalente alla lambda precedente
var risultato = 
    persone.filter((pers) => { return pers.citta == 'Milano'; });    

console.log("===========================================");
risultato.forEach((p) => console.log(p));
*/

persone
    .filter((p) => p.citta == 'Milano')
    .forEach((p) => console.log(p));