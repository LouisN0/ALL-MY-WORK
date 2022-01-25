// #1
document.getElementsByTagName('h1')[0].innerHTML = "Les attributs class et id"
// #2
document.getElementsByTagName('h2')[0].innerHTML = "Exercice 2 partie A"
// #3
document.getElementsByTagName("h2")[1].innerHTML = "Exercice 2 partie B"
// #4
document.getElementsByTagName("p")[0].innerText =  "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"
// #5
document.getElementsByTagName("p")[1].innerText = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"
// #6
let setId = document.getElementsByTagName('h1')[0]
setId.id = "bigTitle"
// #7
let setClass = document.getElementsByTagName('div')[0]
setClass.className = "container"
// #8

// #9

// #10
document.getElementsByTagName('section')[0].setAttribute("class", "margin-bottom border-black padding")
// #11
document.getElementsByTagName('section')[1].setAttribute("class", "margin-top border-black padding")
// #12
document.getElementsByTagName('div')[1].setAttribute('style', 'background-color: blue; border: solid 1px black; height: 20px; width: 20px;')
console.log();