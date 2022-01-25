// // 1. Exo 1 Boucles WHILE
// //     - Créez une variable classe avec un array
// 
// //     - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
// let max = prompt("Quelle sera le max d'etudiants")
// //     - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
// //     - Après avoir rempli la classe, affichez tous les etudiants
// let classe = []
// let eleve = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// let question = +prompt("Combien d'eleves ?")

// while (classe.length < question) {
//     classe.push(prompt("ajouter un eleve"))
    
// }
// console.log(classe)
// 2. Exo 02
//     - Créer un tableau de 9 prénoms 
//     - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     - Astuce : let i = 0;
//     - Astuce 2 : (i < 9)

// let tab = ["a","b","c","d","e","f","g","h","i"]
// let i = 0

// while (i < 9) {
//     console.log("Bonjour " + tab[i])
//     i++
// }

// 3. Exo 03
//     - Créer un tableau de 6 fruits
//     - Avec l'aide d'une boucle while vider le tableau.
//     - Utilisez fruits.length

// let fruits = ["pomme","poire","abricot","fraise","kiwi","raisin"]

// while (fruits.length != 0) {
//     fruits.pop()
// }
// console.log(fruits);

// 4. Exo 04
//     - Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     - Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

// let panierLegumes = ["carrottes","courgettes","beure","tommates"]
// let longueur = panierLegumes.length
// let caisseLegumes = []

// while (panierLegumes.length != 0) {
    
//     caisseLegumes.push(panierLegumes[0])
//     panierLegumes.shift()
// }
// console.log(panierLegumes,caisseLegumes)
// 5. Exo 05
//     - Préparez une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

// let enigme = prompt("Quel est la capitale de Paris")

// while(enigme != "Ta mere"){
//     alert("Mauvaise réponse")
//     enigme = prompt("Quel est la capitale de Paris")
// }

// 6. Exo 06
//     - Re faire l'exo 4 avec DO WHILE

// let panierLegumes = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur']
// let caisseLegumes = []
// let longueur = panierLegumes.length
// let i = longueur - 1

// do {
//     caisseLegumes.push(panierLegumes[i])
//     panierLegumes.splice(i, 1)
//     i--
// } while (i >= 0)

// console.log(caisseLegumes)

// 7. Exo 07
//     - Créer une variable avec l'année actuelle
//     - Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
//     - : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
//     - L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
//     - Finir avec un affichage.

// let actualYear = 2021;
// let minYear = 1970;
// let maxYear = 2018;
// let randomYear = Math.floor(Math.random()*(maxYear-minYear)+ minYear)

// let question = +prompt(`How old is the person if he's born in ${randomYear}, guess her/his age?`)
// let i = 3
// while (question != (actualYear - randomYear) && i > 1) {
//     i--
//     question = +prompt(`Wrong answer you have ${i} tries left, try again`)
    
    
// } if(question != (actualYear - randomYear)){
//     alert('Wrong answer')
// } else {
//     alert("Good Job");
// } 

// 8. Exo 08
//     - Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
//     - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//     - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     - Lui montrer son panier avec la première lettre en majuscule

var panier = [];
while (panier.length < 5){
    var fruit = prompt("Quels fruit voules-vous ajouter?")
        panier.push(fruit);
    }

console.log(panier);

var aRetirer = prompt('Panier rempli avec ' + panier + '. Souhaitez-vous retirer un fruit?');

while(panier.indexOf(aRetirer) != -1){
    panier.splice(panier.indexOf(aRetirer), 1);
    aRetirer = prompt('Panier rempli avec ' + panier + '. Souhaitez-vous retirer un fruit?');
}
alert("Bon appetit");

for (let i=0; i < panier.length; i++){
    // panier[i] = panier[i].toLowerCase();
    panier[i] = panier[i].charAt(0).toUpperCase() + panier[i].substring(1).toLowerCase();
}
alert(panier);