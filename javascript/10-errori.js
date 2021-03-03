var a = 0;

console.log(10 / a);

document.body.addEventListener('click', () => console.log('click body'));

try {
    a.funzione();
} catch(err) {
    console.log(err);
    console.warn(err.name);
    console.error(err.message);
}


document.body.addEventListener('keypress', () => console.log('key pressed'));

console.log('finito.');
