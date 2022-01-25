// 1. EXO1
//   - Traduire le code suivant en class et en instances
// class Lieu {
//     constructor(nom, contenu, ingredients){
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients
//     }
// }
// class Ingredient{
//     constructor(nom, etat, prix){
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }
// class Personne{
//     constructor(nom, lieu, argent, panier, x){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         this.se_deplacer = (x)=> {
//         }
//     }
    
//     payer(x){
//     }
//     couper(x,y){
//     }
// }

// let maison = new Lieu("maison", [])
// let poivron = new Ingredient("poivron", "entier", 1)
// let personnage = new Personne("Maxime", "nean", 100, [])
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

// // ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

// // Personne
// ### let personnage = {
//     ###  nom: "Maxime",
//     ###  lieu: "néant",
//     ###  argent: 100,
//     ###  panier: [],
//     ###  se_deplacer(x){
//     ###  },
    
//     ###  payer(x){
//     ###  },
//     ###  couper(x,y){
//     ###  }
//     ### }


// 2. EXO02
//   - Créer une class Personnage avec comme propriétés : 
//   - age , nom , ville
//   - Faire 2 instances de cette class.

// class Personnage {
//     constructor(age, nom, ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville
//     }
//     sePresenter = () => {
//         console.log(`Bonjour, je m'appelle ${this.nom} !`);
//     }
// }

// let perso1 = new Personnage(22, "Henry", "BXL")
// let perso2 = new Personnage(25, "Felix", "Anvers")
// 3. EXO03
//   - Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
//   - Lancer cette méthode sur les deux instances de l'exo1

// perso1.sePresenter()
// perso2.sePresenter()

// 4. Exo04
//    - Créer une class Objet
//      - _Propriétés : nom, prix


//    - Créer deux instances d'objets avec un nom et un prix
//    - Créer une boite (tableau) et mettre les deux objets dedans.

//    - Créer une class Personnage
//     - _Propriétés : nom(string), sac(tableau), argent(number)
//     - _Méthode : prendre(objet)
//     - _Méthode : acheter(vendeur, objet)

// - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// - Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// class Objet{
//     constructor(nom, prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// let objet1 = new Objet("table", 80)
// let objet2= new Objet("chaise", 40)

// let boite = []
// boite.push(objet1, objet2)

// class Personnage {
//     constructor(nom, sac, argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//     }
//     prendre(objet){
//         this.sac.push(objet)
//     }
//     acheter(vendeur, objet){
//         vendeur.sac.push(objet)
//         this.sac.shift()
//         vendeur.argent -= objet.prix
//         this.argent += objet.prix
//     }
// }

// let perso1 = new Personnage("henry", [], 200)
// let perso2 = new Personnage("Mon pere", [], 70000000)

// perso1.prendre(boite[0])
// boite.shift()
// perso2.prendre(boite[0])
// boite.shift()
// console.log(perso1, perso2);
// perso1.acheter(perso2, perso1.sac[0])
// console.log(perso1, perso2);

// // EXO5

// // Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// class Lieu {
//     constructor(nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// // Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// let molengeek = new Lieu("MolenGeek", []);
// let snack = new Lieu("Snack", []);
// let maison = new Lieu("Maison", []);

// // Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// class Personne {
//     constructor(nom, prenom, argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//         this.seDeplacer = (depart, arrivee, transport) => {
//             depart.personnes.splice(depart.personnes.indexOf(this), 1);
//             if (transport !== "pied") {
//                 transport.embarquer(this)
//             } else {
//                 console.log(`${this.prenom} va aller à pied`);
//             }
//             arrivee.personnes.push(this);
//             console.log(`${this.prenom} est actuellement à ${arrivee.nom}`);
//         }
//     }
// }

// // Puis créez une instance de votre personnage.
// let elias = new Personne("Aboutaharan", "Elias", 100);
// let michael = new Personne("Test", "Michael", 100)

// // Créez une class [Transport] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
// class Transport {
//     constructor(personnes, caisse) {
//         this.personnes = personnes;
//         this.caisse = caisse;
//         this.embarquer = (x) => {
//             if (x.argent >= 2.80) {
//                 x.argent -= 2.80;
//                 x.argent = Number(x.argent.toFixed(2))
//                 this.caisse += 2.80;
//                 this.caisse = Number(this.caisse.toFixed(2));
//                 this.personnes.push(x)
//                 console.log(`${x.prenom} est dans le bus`);
//                 console.log(`${x.prenom} vient de descendre du bus`);
//                 this.personnes.splice(this.personnes.indexOf(x), 1);
//             } else {
//                 console.log(`${x.prenom} n'a pas assez d'argent pour payer le bus`);
//                 console.log(`${x.prenom} va continuer à pied`);
//             }
//         }
//     }
// }

// // Créez une instance de Transport (Bus). 
// let bus = new Transport([], 0);

// // 8h00 Vous êtes à la maison.
// maison.personnes.push(elias)
// console.log(`${elias.prenom} est actuellement à la ${maison.nom}`);


// // 8h30 Vous prennez le bus vers MolenGeek.
// elias.seDeplacer(maison, molengeek, bus);
// // 8h45 Vous êtes à MolenGeek.
// // 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// elias.seDeplacer(molengeek, snack, bus);
// // 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// elias.seDeplacer(snack, molengeek, "pied")
// // 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
// elias.seDeplacer(molengeek, maison, bus)
// // Faites un console.log() de votre argent, ainsi que l'argent du Bus
// console.log(bus.caisse);

// EX6

// - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
// - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille (XS, S, M, L, XL)

class Personne {
    constructor(nom, prenom, age, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.age = Number(age);
        this.argent = Number(argent);
        this.panier = []
        this.prendre = (objet) => {
            this.panier.push(objet)
            console.log(`${this.prenom} a pris dans le panier un ${objet.nom}`);
        }
        this.acheter = (objet) => {
            this.argent -= objet.prix;
            objet.achete = true;
            console.log(`${this.prenom} a payé un ${objet.nom} à la caisse`);
        }
        this.deposer = (objet, endroit) => {
            endroit.armoire.push(objet)
            this.panier.splice(this.panier.indexOf(objet), 1)
            console.log(`${this.prenom} vient de deposer un ${objet.nom} dans l'armoire`);
        }
    }
}

let louis = new Personne("Nollevaux", "Louis", 19, 100);

class Produit {
    constructor(nom, prix, taille){
        this.nom = nom;
        this.prix = Number(prix);
        this.taille = taille;
        this.achete = false;
    }
}

let produit1 = new Produit("t-shirt", 12, "L")
let produit2 = new Produit("t-shirt", 12, "L")
let produit3 = new Produit("t-shirt", 12, "L")
let produit4 = new Produit("t-shirt", 12, "L")
let produit5 = new Produit("t-shirt", 12, "L")

let produits = [produit1, produit2, produit3, produit4, produit5]

class Appartement {
    constructor(nom){
        this.nom = nom;
        this.armoire = [];
        this.personnes = [];
    }
}

let chambre = new Appartement("Chambre")

produits.forEach(element => {
    elias.prendre(element)
})

elias.panier.forEach(element => {
    elias.acheter(element)
})

chambre.personnes.push(elias)

for (let i = 0; i < elias.panier.length; i++) {
    elias.deposer(elias.panier[i], chambre)
    i--
}
console.log(elias);
// - Vous allez créer 3 instances de Personne et 5 instance de Produit
// - Avez la méthode prendre, vous allez mettre les produits dans votre sac
 


// EXO2 suite
// - Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
// - Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit
// - Vous allez créer une classe appelé Appartement avec un nom, une armoire (tableau vide), et personnes (tableau vide)
// - Vous allez créer une instance d'Appartement appelé chambre et vous allez push la parsonne à l'interieur de la chambre
// - Tous les éléments qui se trouvent dans le sac vont aller dans l'armoire grâce à une méthode deposer() qui va se trouver dans la personne

// # Exercice bonus: Combat Pokemon

// ## mise en place:

// ### Dans ce exo, tu vas devoir mettre en place une Class Pokemon dans laquelle on retrouvera un nom sous forme de String, un niveau allant de 1 à 99 sous forme d'un Integer, des points de vie sous forme d'un Integer, une vitesse aussi sous forme d'un Integer ainsi qu'un tableau de type avec un maximum de 2 types par Pokemon
// #### (Pour voir les différents types de Pokemon, tu peux consulter cette page : https://boutique-pokemon.com/blogs/blog-pokemon/table-types-pokemon )
// ## Combat:
// ### Tu devras ensuite extends cette Class afin de créer une Class par Pokemon. Cette Class devra contenir des méthodes pour permettre au Pokemon d'effectuer différentes actions ex: une Class Pikachu avec les méthodes fatal_foudre, queue_de_fer, charge et quick_attack
// ### Pour cette partie , tu vas devoir mettre en place une fonction qui va gérer le combat. Cette fonction prendra en charge deux paramètres: Le Pokemon que tu contrôleras et le Pokemon ennemi. Il faudra à l'aide de prompt demander à l'utilisateur quelle action il voudra exécuter. Ensuite, il faudra laisser l'ennemi exécuter une action et ce ainsi de suite jusqu'à ce que l'un des deux Pokemons tombe KO. N'oublie pas qu'une propriété de vitesse a été mise en place, cela determinera quel Pokemon attaquera en premier.
// ## BONUS : 
// ### Si tu es assez chaud, grâce au tableau de faiblesses que je t'ai fourni ci-dessus tu peux gérer les faiblesses. Ainsi un Pokemon eau subissant une attaque de type éléctrique se verra ramasser le double de dégats,etc ...
// ## BONUS II: 
// ### Si tu es encore plus chaud, tu peux rajouter une propriété défense dans la Class Pokemon afin d'avoir un vrai calcul de dégats ...
// ## N'oublie pas tes IMPORTS/EXPORTS
// ## COURAGE ET SI TU AS DES QUESTIONS J'Y REPONDRAIS (PAS)
// class Pokemon {
//     constructor(nom, niveau, pv, vitesse, type){
//         this.nom = nom;
//         this.niveau = niveau;
//         this.pv = pv;
//         this.vitesse = vitesse;
//         this.typs = type
//     }
// }
// class Pikatchu extends Pokemon{
//     constructor(nom, niveau, pv, vitesse, type,)
//     super(nom, niveau, pv, vitesse, type)
//     fatal_foudre(){
//         if(this.type == "eau"){
//             // degatsX2
//             this.pv -= 80
//         }
//     }
// }


