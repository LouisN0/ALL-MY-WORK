// #1
let recupH2 = document.querySelector('h2.ml-5')
console.log(recupH2);
// #2
recupH2.innerHTML = "Exercice 1"
// #3
let p = recupH2.nextElementSibling
console.log(p);
// #4
let firstSection = document.getElementsByTagName('section')[0].id
console.log(firstSection);
// #5
let firstH1 = document.getElementsByTagName('h1')[0]
console.log(firstH1.classList);
console.log(firstH1.className);
// #6
let nomClass = document.getElementsByTagName('h1')
console.log(nomClass);
[...nomClass].forEach(elem => console.log(elem.className));
// #7
let findImput = document.getElementsByTagName('input')[0]
console.log(findImput.attributes);
// #8
let valeur1 = document.getElementsByTagName('input')[0]
console.log(valeur1.type);
// #9
let inputId = document.getElementById('inputPassword3')
console.log(inputId);
let newInputId = inputId.setAttribute("type", "password")
// #10
let newFirstInput = findImput.setAttribute("type", "color")