// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

//1
let all = document.getElementsByTagName('div')[0].children
var arr = [...all]
console.log(arr);

arr.forEach(element => {
    element.addEventListener('click', () => {console.log(element)}) 
    element.addEventListener('dblclick', () => {
        element.textContent = element.textContent.toUpperCase()
    })
});


let tabEvent = ["border: 1px solid gold", "background-color: blue", "background-color: red", "border: 5px dotted gold"]

function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }
let btn = document.getElementsByTagName('input')[0]

btn.onclick = function () {
    arr.forEach(element => {
        element.style = tabEvent[getRandomInt()]
    });
}