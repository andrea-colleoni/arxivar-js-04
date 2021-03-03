// tipi di variabili

var a = 10; // number
var b = 10.3647; // number

var c = "testo"; // string
var d = true; // boolean

var e = undefined; // indefinito

// oggetti
var o = {}; // Object
console.log(o);
o.proprieta = "valore";
console.log(o);

// esempio
var persona = {
  'nome': "Andrea",
  "cognome": "Colleoni",
  email: "andrea@colleoni.info",
};
console.log(persona);
persona.numeroScarpe = 44;
console.log(persona.nonEsiste);

var arr = []; // Array
arr[0] = 'valore';
console.log(arr);

// esempio
var citta = [
    'Brescia', // indice 0
    'Bergamo',
    'Milano',
    'Cremona',
]
console.log(citta);
console.log(citta[2]);
console.log(citta[10]);
citta[10] = 'Como';
console.log(citta);
citta[8] = 1000;
citta[6] = {
    prop: 'valore',
}
citta[11] = [
    1, 2, 3, 4, 5, 6,
]
console.log(citta);
console.log(citta[11][2]);