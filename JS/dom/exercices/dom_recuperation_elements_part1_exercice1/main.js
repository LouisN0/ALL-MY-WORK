// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
let titre = document.getElementsByTagName("h1")
console.log(titre);

// ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent
let h3 = document.getElementsByTagName("h3")
let sstitre1 = document.getElementsByTagName("h3")[0]
let sstitre2 = document.getElementsByTagName("h3")[1]
let sstitre3 = document.getElementsByTagName("h3")[2]
console.log(sstitre1, sstitre2, sstitre3);
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log

let paragraphe = document.getElementsByTagName("p")
let p2 = document.getElementsByTagName("p"[1])
console.log(p2);

// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log

let li = document.getElementsByTagName("li")
let li3 = document.getElementsByTagName("li")[2]
console.log(li3);