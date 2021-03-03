// variabile
var a = 10;

// funzione
// named function
function f1() { // Function
    console.log('dentro la funzione f1');
}

console.log(f1);
f1(); // le parentesi () servono per chiamare la funzione

// a(); // sto dicendo: chiama a => da errore perché a non è una Function

// sintassi alternative
// anonymous function memorizzata in una var
var f2 = function() {
    console.log('dentro la funzione f2');
}
f2();

// lambda expression (equivalente all'anonymous function)
var f3 = () => console.log('dentro la funzione f3');
f3();