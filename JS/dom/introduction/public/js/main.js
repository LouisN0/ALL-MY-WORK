// let titre = document.getElementsByTagName("h1")[0]
// console.log(titre);

// let rouge = document.getElementsByClassName("bg-danger")

// let yellow = document.getElementsById("yellow")
// console.log(yellow);

// let titre = document.querySelector("")¨
let h1 = document.createElement("h1")
let texth1 = document.createTextNode('Bonjour à tous !')
h1.appendChild(texth1)
h1.style.backgroundColor = "red"
h1.style.border = "1px solid black"



let body = document.body
body.appendChild(h1)
