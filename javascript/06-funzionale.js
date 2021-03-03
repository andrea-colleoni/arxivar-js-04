var f1 = (argomento) => {
    console.log('dentro la funzione', argomento, typeof argomento);
    if (typeof argomento == 'function') { // solo se argomento è una funzione
        argomento(); // chiamata
    }
}

f1(); // non sono obbligato a passare l'argomento
f1(100);
f1('andrea', 'colleoni', 1000);
// non esiste l'overload delle funzioni

f1(true);
f1({nome: 'andrea', cognome: 'colleoni'});
f1([1, 2, 3, 'ciao']);

var f2 = () => console.log('dentro f2');
f1(f2);

// passo una funzione anonima, scritta come lambda a una funzione
// => closure
f1(() => console.log('lambda anonima!!'));