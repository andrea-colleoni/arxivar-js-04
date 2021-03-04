// jquery per individuare gli elemnti nel DOM usa la sintassi dei selettori CSS

$('#btnAjax').on('click', () => {
    console.log('click!!');
    $.ajax({
        url: 'persone.json',
        method: 'GET',
    })
    .done((persone) => {
        console.log('fatto!', persone);
        persone.forEach((p) => {
            // uso una stringa interpolata per creare la riga e appenderla al corpo della tabella
            // backtick (`) => ALT + 96
            $('#corpoTabella').append(`<tr>
            <td>${p.nome}</td>
            <td>${p.cognome}</td>
            <td>${p.email}</td>
            <td>${p.altezza}</td>
            </tr>`);
        });
    });
});