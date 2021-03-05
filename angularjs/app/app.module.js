'use strict';

// Declare app level module which depends on views, and core components
var corsoApp = angular.module('corsoNg', [
    'ngRoute',
    'ngResource',
    'ngAnimate'
]);

// creiamo un modul ng; l'array che passiamo alla funz è l'insieme delle dipendenze
// che quel modulo avrà (le funzionalità che vogliamo rendere disponibili a questo modulo)
// => questo è un modulo "speciale": il primo e rappresenta l'intera app (root module)
// => il root module determina anche il root scope (scope della app)
