// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

// function addition(nbr1, nbr2) {
//     return nbr1 + nbr2;
// }

// console.log(addition(4, 4));

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

// function sous(nbr1, nbr2) {
//     return nbr1 - nbr2
// }
// console.log(sous(8, 4));

// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

// function Multiplication(nbr1, nbr2) {
//     return nbr1 * nbr2
// }
// console.log(Multiplication(8, 4));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

// function Division(nbr1, nbr2) {
//     return nbr1 / nbr2
// }
// console.log(Division(8, 4));

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

// function Modulo(nbr1, nbr2) {
//     return nbr1 % nbr2
// }
// console.log(Modulo(1000, 7));

// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

// function Racine(nbr1) {
//     return Math.sqrt(nbr1)
// }
// console.log(Racine(9));

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

function Exposant(nbr1, nbr2) {
    return Math.pow(nbr1, nbr2)
}
console.log(Exposant(7, 3));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

function Capitalize(string) {
    
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
}
console.log(Capitalize("louIS"));
// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

// function calcul(nbr1, operator, nbr2) {
    
//     nbr1 = +prompt("Premier nombre")
//     operator = prompt("Operateur")
//     nbr2 = +prompt("Deuxieme nombre")

//     switch(operator){
//         case "+":
//             return nbr1 + nbr2
//             break;
//         case "-":
//             return nbr1 - nbr2
//             break;
//         case "*":
//             return nbr1 * nbr2
//             break;
//         case "/":
//             return nbr1 / nbr2
//             break;
//         default:
//             return alert("Selectionner un operateur valide")
//     }
// }

// console.log(calcul());

// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// function reverseNumber(nbr) {
//     let split = nbr.split("")
//     let revers = split.reverse()
//     return revers.join("")
// }

// console.log(reverseNumber("1672"));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// function divPar2(nbr) {

//     let calc = nbr / 2
//     switch(nbr%2){
//         case 0:
//             return alert("Le num " + nbr + " est divisible par 2 " + nbr + ":2 = " + calc);
//             break
//         case 1:
//             return alert("Ce nombre n'est pas divisible par 2")
//             break
//         default:
//             return alert("Entrer un nombre")
        
//     }
// }

// console.log(divPar2(+prompt("nombre")))

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// function LogIn() {
//     let log = prompt("Quel est voitre mot de passe ?")
    
//     while (log != "mdp") {
//         alert("mauvais mot de passe")
//         log = prompt("Quel est voitre mot de passe ?")
//     }

//     alert("Vous êtes connecté")
// }
// console.log(LogIn());