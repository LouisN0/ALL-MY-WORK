// # Conditions
// 1. Verifie si "5" est strictement égale à 5
console.log("5" === 5);
// 2. Posez une question à l'utilisateur qui doit repondre avec un chiffre, et stockez un nombre aleatoire entre 1 et 20. Si la personne devine au premier coup, vous lui dites comme quoi elle a réussi, sinon vous lui dites qu'elle a raté
let question = +prompt("Un chiffre entre 1 et 20")

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
let reponse = getRandomIntInclusive(1, 20)

if(question == reponse){
    alert("Bonne reponse")
}
else{
    alert("mauvaise reponse")
}
// 3. Créez une devinette (Un tableau avec des fruits, et vous devez deviner un fruit qui se trouve dans le tableau, si vous le trouvez, vous avez reussi, sinon vous avez raté)
let tabF = ["pomme", "kiwi", "banane", "peche"]


// 4. Posez une question à l'utilisateur sur le jour qu'on se trouve, si il reponde "lundi", "mardi", "mercredi" ou "jeudi" on lui dit "je suis fatigué", et le reste de la semaine "ouaaaaai c'est le weekend"
// 5. Créer une variable qui affiche quel âge avez vous ? si l'âge de la personne de la personne est égal à 18 ou plus et que la personne à 30 ou moins elle rejoint la section des 18-30 ans sinon si la personne à 50 ans ou moins et plus de 30 ans elle rejoint la section des 30-50ans sinon si la personne à plus de 50 ans elle rejoint la section des plus de 50 ans sinon la personne est trop jeune pour rejoindre le site.
// 6. Créez 3 questions, si la personne repond bien à une seule question, elle a un message comme quoi elle a réussi
// 7. La même chose que le 6 mais la personne doit repondre bien aux trois questions


// # Tableaux
// 1. Créez un tableau avec 5 éléments et supprimez le premier et le dernier
// 2. Puis, ajoutez un élément à la fin et un au début
// 3. Grâce à une boucle, mettez tous les éléments du tableau en majuscule
// 4. Trouvez une méthode qui permet de supprimer le 3ème élément dans connaitre sa position
// 5. Transformez un tableau en chaine de caractères avec 2 méthodes
// 6. Transformez une chaine de caractères en array avec 2 méthodes


// # Functions
// 1. Créez une fonction qui permet de returner la taille d'une chaine de caractères
// 2. Créez une fonction qui permet de verifier quel est le type du parametre
// 3. Créez une fonction qui permet de vérifier si le chiffre est plus grand ou égale à 50
// 4. Créez une fonction qui permet de renvoyer la racine cubique du parametre
// 5. Créez une fonction qui met en majuscule qu'à partir de la 5ème lettre
// 6. Créez une fonction qui met en miniscule qu'à partir de la 9ème lettre
// 7. Fusionnez les deux fonctions

// Boucles
// 1. let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?" +"(Réponse : le nain ______") + "ATTENTION, tant que tu ne répond pas a la question, la question réaparait";
// 2. Créez un tableau avec les élèves de la classe, et faites les passer dans un autre tableau
// 3. Créez un tableau avec des fruits, et tant que la personne veut supprimer un fruit, vous lui demandez lequel et il se supprime
// 4. Faites la même chose que l'exercice 2 avec une boucle foreach