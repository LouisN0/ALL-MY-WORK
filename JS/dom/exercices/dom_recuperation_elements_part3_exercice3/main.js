let myObject = {
    nom: 'nicolas',
    age: 18,
}

// #1
let myElement = document.getElementById('object').children
console.log(myElement);
// #2
let tabObjet = Object.values(myObject)
console.log(tabObjet);
// #3
[...tabObjet].forEach(elem => console.log(elem));
// #4

// #5

