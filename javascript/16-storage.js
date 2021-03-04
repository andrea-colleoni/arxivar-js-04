function accedi() {
    var txt = document.getElementById('txtUtente').value;
    localStorage.setItem('user', atob(txt));
    location.reload();
}

var utente = document.getElementById('utente');

if (localStorage.getItem('user')) {
    utente.innerText = btoa(localStorage.getItem('user'));
} else {
    utente.innerText = 'Anonimo';
}
