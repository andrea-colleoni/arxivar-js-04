var ogg = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'rossi@dominio.it',

    nomeCompleto: () => ogg.nome + ' ' + ogg.cognome,
    // nomeCompleto: function () { return nome + ' ' + cognome; },
}

console.log(ogg.nomeCompleto);
console.log(ogg.nomeCompleto());

