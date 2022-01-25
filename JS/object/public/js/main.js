// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

// let personne = {
//     nom: "Nollevaux",
//     prenom: "Louis",
//     age: 19,
//     taille: 190,
// }
// console.log(personne.age);

// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let personne2 = {
//     nom: "Bibiba",
//     prenom: "Jean",
//     age: 80,
//     taille: 120,
// }

// let personne3 = {
    
// }

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

// personne3 = Object.assign({nom: personne.nom}, {age: personne2.age}, {taille: 210})

// console.log(personne3);

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let personnage = {
//     nom: "Dinant",
//     prenom: "Andre",
// }
// function sePresenter() {

//     return "Bonjour je m'appelle " + personnage.nom + " " + personnage.prenom
// }
// console.log(sePresenter())
// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let pers = {
//     nom: "Louis",
//     age: 19,
//     changeAge: function age() {
//         let question = +prompt("Changer l'age")
//         pers = Object.assign({age: question})
//     }
// }
// console.log(pers.changeAge());
// alert(pers.nom + " a " + pers.age + " ans") 

// 5. Exo 5

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

// let perso1 = {
//     nom: "François",
//     panier: ["Tommates","jambon"],
//     derober: function vole() {
//         let i = 0
//         while (i < 2) {
//             perso1.panier.push(perso2.panier[0])
//             perso2.panier.splice(0, 1)
//             i++
//         }
        
//         return perso1.panier
//     }
// }
// let perso2 = {
//     nom: "Sergio",
//     panier: ["huile","mozza"],
// }

// console.log(perso1.derober())
// console.log(perso2.panier)

// 6. Exo 06

//    - Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne



//    - une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

//    - Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".


//    - Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

let veille_dame ={
    nom:{
        nom:"Carolo",
        prenom:"Joseline",
    },
    age:"10³",
    moral:"mal",
    objet:"durum",
    parler(){
        if (this.moral==="mal") {
            console.log(`Vous me dérangez, coup de ${this.objet} dans votre face`);
        } else if (this.moral==="bien"){
            console.log(`Bien le bonjour ${vieil_homme.nom}`);
        }
    }
}
let vieil_homme ={
    nom:"Alphonse",
    adoucir(){
        veille_dame.moral="bien"
    }
}
veille_dame.parler();
console.log(veille_dame);
vieil_homme.adoucir();
veille_dame.parler();
