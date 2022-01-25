// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

//1
let btn = document.getElementsByTagName('input')[0]
let theP = document.getElementsByTagName('p')[0]

btn.onclick = function () {
    theP.innerHTML = pContent
}

//2

let theH1 = document.getElementsByTagName('h1')[0]

theH1.addEventListener('click', function () {
    theH1.style.backgroundColor = theBackground
    theH1.style.color = theColor
})