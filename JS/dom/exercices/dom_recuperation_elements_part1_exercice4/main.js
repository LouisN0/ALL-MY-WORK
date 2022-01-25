// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1

let contText = document.querySelector("h1:nth-of-type(2)")
console.log(contText.innerText);
// ### 2. Affiche le contenu textuel du dernier li

let lastLi = document.querySelector("li:last-of-type")
console.log(lastLi.innerText);

// ### 3. Affiche le contenu textuel du premier p en majuscule

let firstP = document.querySelector("p:first-of-type")
console.log(firstP.innerText.toUpperCase())

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule

let li = document.getElementsByTagName("li")
li.forEach(element => console.log(element))