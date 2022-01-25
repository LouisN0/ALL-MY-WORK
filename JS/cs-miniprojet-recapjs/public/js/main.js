
let nav = document.getElementsByTagName('nav')[0]
let btn = document.getElementsByClassName('bouton')
let btnTab = [...btn]
let section1 = document.getElementsByTagName('section')[0]
//exercice2
btnTab.forEach((element, i) => {
    element.addEventListener('click', () => {
        [...document.getElementsByTagName('section')].forEach(e => {e.style.display = "none"})
        document.getElementsByTagName('section')[i-1].style.display = 'block'
    })
    i++
});
// exercice1
let firstH2 = document.querySelector('#firstH2')
firstH2.innerHTML = "le titre modifié"
firstH2.style.color = "white"
firstH2.classList.add("bg-dark")
// exercice3
let btnInput = document.getElementById("btnGO")
let h2Change = document.getElementsByTagName('h2')[1]

btnInput.addEventListener('click', () => {
    h2Change.innerText = "welcome " + document.getElementsByTagName('input')[0].value
    document.getElementsByTagName('input')[0].value = ""
})
// exercice4
let btnChangePlace = document.getElementsByTagName('button')[7]

let i = 0
console.log(btnChangePlace);
btnChangePlace.addEventListener('click', () => {
    if(document.getElementById('carre').style.display == "block"){
        document.getElementById('carre').style.display = "none"
        document.getElementById('carre2').style.display = "block"
        i++
        console.log(i)
    }
    else{
        document.getElementById('carre2').style.display = "none"
        document.getElementById('carre').style.display = "block"
        i++
        console.log(i)
    }
    document.getElementsByTagName('button')[8].innerText = "nombre de click " + i
})
console.log(typeof(NaN))

//exercice5
let btnOeuf = document.getElementById('pushoeuf')
let tabOeuf = document.getElementById('taboeuf')

btnOeuf.addEventListener('click', () => {
    let newOeuf = document.createElement('img')
    newOeuf.setAttribute('src', './public/img/oeuf.png')
    newOeuf.setAttribute('class', 'w-25')
    tabOeuf.appendChild(newOeuf)
})

//exercice6
//partie1
document.getElementById('egale').addEventListener('click', () => {
    document.getElementById('resultat').innerText = Number(document.getElementById('valeur1').value) + Number(document.getElementById('valeur2').value)

})
//partie2
// let tab = "1+1"
// let nbr1
// let superTab = [...tab]
// let j = 0
// while (j != superTab.length) {
//     if(superTab[j] == "+" || superTab[j] == "-"  || superTab[j] == "*" || superTab[j] == "/"){
//         nbr1 = superTab.splice(0, j-1)
//     }
//     j++
// }
// console.log(nbr1);

// let tab = "15151+151054"
// let nbr1
// let opperateur1
// let nbr2
// let superTab = [...tab]
// let j = 0
// while (j != superTab.length) {
//     if(superTab[j] == "+" || superTab[j] == "-"  || superTab[j] == "*" || superTab[j] == "/"){
//         let temp = []
//         for (let i = 0; i < j; i++) {
//             temp.push(superTab[i])
//         }
//         nbr1 = temp.join("")
//     }
//     else if(j == superTab.length){
//         l
//     }
//     j++
// }
// console.log(nbr1);


// while(j != superTab.lenght){
//     let index
//     if(superTab[j] == "+" || superTab[j] == "-"  || superTab[j] == "*" || superTab[j] == "/"){
//         opperateur1.push(superTab[j])
//         index = j
//     }
//     nbr1.push(superTab[j])
//     i++
// }

let inputCalc = document.getElementById("inputCalc").value
let nbr1 = []

let calc = document.getElementById('calc').innerText

document.getElementById('un').onclick = () => {
    document.getElementById("inputCalc").value += "1"
}
document.getElementById('deux').onclick = () => {
    document.getElementById("inputCalc").value += "2"
}
document.getElementById('trois').onclick = () => {
    document.getElementById("inputCalc").value += "3"
}
document.getElementById('quatre').onclick = () => {
    document.getElementById("inputCalc").value += "4"
}
document.getElementById('cinq').onclick = () => {
    document.getElementById("inputCalc").value += "5"
}
document.getElementById('six').onclick = () => {
    document.getElementById("inputCalc").value += "6"
}
document.getElementById('sept').onclick = () => {
    document.getElementById("inputCalc").value += "7"
}
document.getElementById('huit').onclick = () => {
    document.getElementById("inputCalc").value += "8"
}
document.getElementById('neuf').onclick = () => {
    document.getElementById("inputCalc").value += "9"
}
document.getElementById('zero').onclick = () => {
    document.getElementById("inputCalc").value += "0"
}

document.getElementById('plus').onclick = () => {
    nbr1.push(document.getElementById("inputCalc").value + "+")
    document.getElementById('calc').innerText = nbr1.join("")
    document.getElementById("inputCalc").value = ""
    console.log(nbr1.join(""))
}

document.getElementById('moins').onclick = () => {
    nbr1.push(document.getElementById("inputCalc").value + "-")
    document.getElementById('calc').innerText = nbr1.join("")
    document.getElementById("inputCalc").value = ""
    
}

document.getElementById('fois').onclick = () => {
    nbr1.push(document.getElementById("inputCalc").value + "*")
    document.getElementById('calc').innerText = nbr1.join("")
    document.getElementById("inputCalc").value = ""
    
}

document.getElementById('divi').onclick = () => {
    nbr1.push(document.getElementById("inputCalc").value + "/")
    document.getElementById('calc').innerText = nbr1.join("")
    document.getElementById("inputCalc").value = ""
    
}

document.getElementById('clear').onclick = () => {
    document.getElementById("inputCalc").value = ""
    
}

document.getElementById('egale2').onclick = () => {
    nbr1.push(document.getElementById("inputCalc").value)
    document.getElementById('calc').innerText = nbr1.join("")
    document.getElementById("inputCalc").value = ""
    nbr1 = nbr1.join("")
    document.getElementById("inputCalc").value = eval(nbr1);
    nbr1 = []
}



