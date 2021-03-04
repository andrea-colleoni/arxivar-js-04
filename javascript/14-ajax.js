function doAjax() {
    console.log('proviamo...');

    var http = new XMLHttpRequest(); 

    http.onreadystatechange = () => {
        if (http.readyState === 4) {
            console.log(http.responseText);

            /*
            var nodo = document.createElement('div');
            nodo.innerHTML = http.responseText;
            frammenti.appendChild(nodo);
            */
            var persone = JSON.parse(http.responseText);
            console.log(persone);
            persone.forEach((p) => {
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                td.innerText = p.nome;
                tr.appendChild(td);
                td = document.createElement('td');
                td.innerText = p.cognome;
                tr.appendChild(td);
                td = document.createElement('td');
                td.innerText = p.email;
                tr.appendChild(td);
                td = document.createElement('td');
                td.innerText = p.altezza;
                tr.appendChild(td);
                tabella.appendChild(tr);
            });
        }
    }

    http.open('GET', 'persone.json'); // open non avvia la richiesta, la imposta e basta
    http.send();
}

var frammenti = document.getElementById('frammenti');
var tabella = document.getElementById('corpoTabella');
