let div = document.getElementById('content')
let paragraphe = document.getElementsByTagName('p')[0]
let h1 = document.getElementsByTagName('h1')[0]
let h2 = document.getElementsByTagName('h2')[0]

function changerment(e){
    if(e.target.tagName == "H1"){
        e.target.style.backgroundColor = "yellow"
    }
    else if(e.target.tagName == "H2"){
        e.target.innerHTML = e.target.innerHTML.slice(1, e.target.innerHTML.length)
    }
    else if(e.target.tagName == "DIV"){
        e.target.style.border = "1px solid red"
    }
    else if(e.target.tagName == "P"){
        e.target.style.fontWeight = "bold"
        e.target.style.color = "red"
    }
}

div.addEventListener('click', changerment)

let superVariable = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

function changement(e){
    e.target.innerHTML = superVariable
}

let elem2 = document.getElementsByTagName('p')[1]
let section = document.getElementsByTagName('section')[0]

section.mouseover = function(){
    elem2.innerHTML = superVariable
}