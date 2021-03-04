console.log(document.cookie);

//document.cookie = 'user=andrea';
function accedi() {
    var txt = document.getElementById('txtUtente').value;
    document.cookie = `user=${txt}; path=/`;
    location.reload();
}

var utente = document.getElementById('utente');
var userFound = false;

document.cookie.split(';').forEach((s) => {
    var props = s.split('=');
    if (props[0] === 'user') {
        utente.innerText = props[1];
        userFound = true;
        return;
    }
});

if (!userFound) {
    utente.innerText = 'Anonimo';
}
