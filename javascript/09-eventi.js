function clickParagrafo(event) {
    event.stopPropagation();    
    console.log('click!', event);
}

var titolo = document.getElementById('titolo');
titolo.addEventListener('mouseover', (evento) => {
    console.log(evento);
    titolo.style.fontSize = '50px';
});
titolo.addEventListener('mouseout', (evento) => {
    console.log(evento);
    titolo.style.fontSize = '';
});

document.body.addEventListener('keypress', (evento) => {
    console.log('premuto il tasto', evento.key);
});
document.body.addEventListener('click', (evento) => {
    console.log('cliccato il body', evento);
});