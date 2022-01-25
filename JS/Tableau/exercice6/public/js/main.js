// 1. 
//         - Supprimer le dernier élément de l'array
//         - let monTab = ['pomme', 'fraise', 'melon', 'citron']
//         - Supprimer le premier élément de l'array
//         - Ajouter un élément a la fin de l'array
//         - Ajouter un élément au debut de l'array
//         - Mettre le deuxième élément en majuscule 
//         - Changer l'ordre de l'array
let monTab = ['pomme', 'fraise', 'melon', 'citron'];
console.log(monTab);
let cons1 = monTab.pop();
console.log(monTab);
let cons2 = monTab.shift();
console.log(monTab);
let cons3 = monTab.push('orange');
console.log(monTab);
let cons4 = monTab.unshift('kiwi');
console.log(monTab);
let cons5 = monTab[1].toUpperCase();
console.log(monTab);
let cons6 = monTab.reverse();
console.log(monTab);


// 2.
//         - Ordonner les chiffres
//         - let chiffres = [4, 5, 2, 1, 3]
//         - Première methode (Ordonner)
//         - *Resultat : 1, 2, 3, 4, 5*
//         - Deuxième methode (Concaténer les chiffres en un string)
//         - *Resultat : 1-2-3-4-5*
//         - Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
//         - Afficher l'array avec les chiffres ordonnées
let chiffres = [4, 5, 2, 1, 3];
let cons1_2 =  chiffres.sort();
let cons2_2 = chiffres.toString();
let cons3_2 = cons2_2.split();
console.log(cons3_2);

// 3. 
//         - Créez un tableau vide
//         - Ajouez 10 élément dans votre array
//         - Affichez le contenu de l'array et sa taille
//         - Touvez l'index de chaque éléments
//         - Utiliser une methode qui permet de supprimer un element grâce à l'index
//         - Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
//         - En une ligne supprimer 'Anis' du tableau
 let tableau = []
 let cons1_3 = tableau.push('1er', '2eme', '3eme', '4eme', '5eme', '6eme', '7eme', '8eme', '9eme', '10eme');
 console.log("Elements du tableau: " + tableau + "." + "   Longueur du tableau: " + tableau.length)
 console.log("Index de chaques elements dans l'ordre croissant:  " + tableau.indexOf('1er') + tableau.indexOf('2eme') + tableau.indexOf('3eme') + tableau.indexOf('4eme') + tableau.indexOf('5eme') + tableau.indexOf('6eme') + tableau.indexOf('7eme') + tableau.indexOf('8eme') + tableau.indexOf('9eme') + tableau.indexOf('10eme'));
 let supp = tableau.splice(2, 1)
 console.log(tableau)

 let classe = ['Adil', 'Aleksic', 'Amanda', 'Baptiste', 'Calvin', 'Eliot', 'Gursel', 'Ilias', 'Imane', 'Jade', 'Louis', 'Kevin', 'Marcyl', 'Michael', 'Mohamed', 'Nicola', 'Samy'];
 let aleatoire = classe[Math.floor(Math.random() * classe.length)]
 console.log(aleatoire)
 let dsl = classe.splice(7, 1)
 console.log(classe)