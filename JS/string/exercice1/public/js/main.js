// 1. let phrase = "Bonjour tout le monde         "
let phrase = "Bonjour tout le monde         "
// 2. Afficher la longueur de la phrase
console.log(phrase.length)
// 3. Enlever l'espace à la fin grâce à une méthode
console.log(phrase.trim())
// Reafficher la longueur de la phrase
console.log(phrase.length)
// 5. Afficher uniquement la dernière lettre de la phrase
console.log(phrase.substr(20))
// 6. Enlever "Bonjour" de la phrase
let phrase = "Bonjour tout le monde"
phrase = phrase.substring(8)
console.log(phrase)
// 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode
phrase = "Bonjour " + phrase
console.log(phrase)
// 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode
let phrase = "Bonjour tout le monde"
phrase = phrase.substring(0, 8)
console.log(phrase)
// 9. Remplacer dans la phrase le mot "number" par le mot "string"
let phrase = "Bonjour tout le monde"
phrase = phrase.replace('Bonjour', 'String')
console.log(phrase)
// 10. Bonus : Donner un chiffre aléatoire 
console.log(Math.random())
// 11. Mettre la 5ème et la 8ème lettre en majuscule et tout le reste en minuscule de la variable phrase
let phrase = "Bonjour tout le monde"
let phrase2 = phrase.substring(0, 4) + phrase.substring(4, 5).toUpperCase() + phrase.substring(5, 8) + phrase.substring(8, 9).toUpperCase() + phrase.substring(9, 21);
console.log(phrase2);
// 12. Cherche l'index du 2ème O du mot bonjour
let phrase = "Bonjour tout le monde"
let cherche = "o";
premierIndex = phrase.indexOf(cherche);
resultat = phrase.indexOf(cherche, (premierIndex + 1));
console.log(resultat);
// ----autre solution----
console.log(phrase.indexOf("o", 2))
// 13. let nom = "votre nom" // mettez la premier et la dernière lettre en majuscule grâce à des méthodes
let nom = "louis";
let tailleString = nom.length;
let premiereLettre = nom.charAt(0).toUpperCase();
let derniereLettre = nom.charAt(tailleString-1).toUpperCase();

let motsDecoup = nom.slice(1, (tailleString - 1));

console.log(premiereLettre + motsDecoup + derniereLettre);

// ----autre solution----
nom = nom.charAt(0).toUpperCase() + nom.slice(1, 4) + nom.charAt(4).toUpperCase();
console.log(nom)
