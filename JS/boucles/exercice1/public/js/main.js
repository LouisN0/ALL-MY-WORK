// 1. Exo 1 Boucles FOR
//     - Creer une varaible de type array et inserez toutes les personnes de la classe
//     - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau

// let classe = ['Adil', 'Aleksic', 'Amanda', 'Baptiste', 'Calvin', 'Eliot', 'Gursel', 'Ilias', 'Imane', 'Jade', 'Louis', 'Kevin', 'Marcyl', 'Michael', 'Mohamed', 'Nicola', 'Samy'];
// for(let i = 0; i < classe.length; i++){
//     console.log("Bonjour " + classe[i])
// }

// 2. Exo 2 Boucles FOR (let)
//     - Dans un prompt inserés un nombre 
//     - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

// let nombre = +prompt("inserer un nombre")
// for(let i = 0; i <= nombre; i++){
//     console.log(i)
// }

// Exo 3 Boucles FOREACH
// - Creer une varaible de type array et inserez toutes les personnes de la classe
// - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

let classe = ['Adil', 'Aleksic', 'Amanda', 'Baptiste', 'Calvin', 'Eliot', 'Gursel', 'Ilias', 'Imane', 'Jade', 'Louis', 'Kevin', 'Marcyl', 'Michael', 'Mohamed', 'Nicola', 'Samy'];
classe.forEach(element => {
    console.log("Bonjour " + element);
});


// 4. Exo 4 Boucle FOREACH
// - Créez un un array qui contient 5 éléments
// - Affichez touts les éléments a l'aide d'une boucle foreach

let tab = ["a", "b", "c", "d", "e"];
tab.forEach(element => {
    console.log(element);
});