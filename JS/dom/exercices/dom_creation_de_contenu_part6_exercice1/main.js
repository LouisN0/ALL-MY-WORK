//1
let div1 = document.getElementById('content')
console.log(div1);
let createH2 = document.createElement('h2')
createH2.innerHTML = 'Part 6 - Exercice 1'
div1.appendChild(createH2)
//2
let createP = document.createElement('p')
createP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis?'
div1.appendChild(createP)
//3
let createH1 = document.createElement('h1')
createH1.innerHTML = 'Le DOM - Création de HTML'
div1.insertBefore(createH1, div1.firstChild)
//4
let contDiv = div1.children
let div2 = document.getElementById('secondaire')
div2.innerHTML = div1.innerHTML
let h12 = document.getElementsByTagName('h2')[1]
h12.innerHTML = 'Part 6 - Exercice 2'
//5
let div3 = document.createElement('div')
div3.setAttribute('id', "matiere")
let body = document.getElementsByTagName('body')[0]
console.log(body);
body.appendChild(div3)
let newol = document.createElement('ol')
div3.appendChild(newol)
let li1 = document.createElement('li')
li1.innerHTML = "JS"
let li2 = document.createElement('li')
li2.innerHTML = "CSS"
let li3 = document.createElement('li')
li3.innerHTML = "HTML"
newol.appendChild(li1)
newol.appendChild(li2)
newol.appendChild(li3)
