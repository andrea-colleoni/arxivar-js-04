$(() => { // document is ready
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: 'GET',
    })
    .done((users) => {
        var table = $('#users').DataTable({
            data: users,
            columns: [
                { title: 'Nome', data: 'name'},
                { title: 'E-mail', data: 'email'},
                { title: 'Città', data: 'address.city'},
                { title: 'Società', data: 'company.name'},
            ]
        });
        $('#users tbody').on('click', 'tr', function () {
            var data = table.row( this ).data();
            localStorage.setItem('selectedUser', JSON.stringify(data));
            location.href = 'soluzione-02-details.html';
        });        
    })
    .fail(() => {

    });
});