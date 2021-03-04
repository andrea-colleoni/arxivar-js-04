$(() => {
    var selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
    $('.card-header').text(selectedUser.name);
    $('#email').text(selectedUser.email);
    $('#city').text(selectedUser.company.name);

    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([selectedUser.address.geo.lng, selectedUser.address.geo.lat]),
          zoom: 4
        })
      });

    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/comments`,
        method: 'GET',
    })
    .done((comments) => {
        var table = $('#comments').DataTable({
            data: comments,
            "scrollY": "250px",
            "scrollCollapse": true,
            "paging": false,
            columns: [
                { title: 'Nome', data: 'name'},
                { title: 'Messaggio', data: 'body'},
            ]
        });      
    })
    .fail(() => {

    });
});