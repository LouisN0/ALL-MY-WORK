// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri sinon go cimetière.

// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. (go to (se déplacer), take care (prendre un médicament) et paye ( payer docteur / pharmacie ) sont des méthodes) (maladie, etatSante,traitement sont des strings)


function contPers (lieu){
    let i = 0;
    let tab = []

    while (i < tab.length) {
        tab.shift()
        i++
    }

    while (i < lieu.piece.length) {
        tab.push(lieu.piece[i].nom)
        i++

    }

    return(console.log(tab))
}


class Malades {
    constructor(nom, maladie, argent, poche, etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = {
            nom: "",
            prix: "",
        }
    }
    goTo(depart, arrivee){
        arrivee.piece.push(this)
        depart.piece.pop();
        console.log(`${this.nom} est partit de ${depart.nom} et est arrivé à ${arrivee.nom}`);
    }
    paye(personne, aPayer){
        personne.argent += aPayer
        this.argent -= aPayer
        console.log(`il reste ${this.argent} $ à ${this.nom}`);
    }
}
class Lieu {
    constructor(nom, piece){
        this.nom = nom;
        this.piece = piece;
    }
}

// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade

let marcus = new Malades("Marcus", "mal indenté", 100, [], "malade","")
let optimus = new Malades("Optimus", "unsave", 200, [], "malade","")
let sangoku = new Malades("Sangoku", "404", 80, [], "malade","")
let darthVader = new Malades("DarthVader", "azmatique", 110, [], "malade","")
let semicolon = new Malades("Semicolon","syntaxError", 60, [], "malade","")


// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet. ( rajouter salleAttente : tous les patients dès le début (tableau avec des éléments)) ( bonus faire miauler un chat ( fct asynchrone))

let doctor = {
    nom: "Debugger",
    argent: 0,
    patientIn() {
        cabinet.piece.push(salleAttente.piece[0])
        salleAttente.piece.shift()
    },
    patientOut() {
        salleAttente.piece.push(cabinet.piece[0])
        cabinet.piece.shift()
        
    },
    diagnostic(){
        if (cabinet.piece[0].maladie == "mal indenté") {
            cabinet.piece[0].traitement.nom = "ctrl+maj+f";
            cabinet.piece[0].traitement.prix = "60 $";
            console.log(`Le docteur détecte la maladie ${cabinet.piece[0].maladie} chez le patient ${cabinet.piece[0].nom} et lui donne une ordonance pour le traitement ${cabinet.piece[0].traitement.nom}`);
            cabinet.piece[0].etatSante = "En traitement"
            console.log(`L'état de santé de ${cabinet.piece[0].nom} est maintenant ${cabinet.piece[0].etatSante}`);
            console.log(`${cabinet.piece[0].nom} doit maintenant payer 50 $`)
            
        }
        else if (cabinet.piece[0].maladie == "unsave") {
            cabinet.piece[0].traitement.nom = "saveOnFocusChange";
            cabinet.piece[0].traitement.prix = "100 $";
            console.log(`Le docteur détecte la maladie ${cabinet.piece[0].maladie} chez le patient ${cabinet.piece[0].nom} et lui donne une ordonance pour le traitement ${cabinet.piece[0].traitement.nom}`);
            cabinet.piece[0].etatSante = "En traitement"
            console.log(`L'état de santé de ${cabinet.piece[0].nom} est maintenant ${cabinet.piece[0].etatSante}`);
            console.log(`${cabinet.piece[0].nom} doit maintenant payer 50 $`)
        }
        else if (cabinet.piece[0].maladie == "404") {
            cabinet.piece[0].traitement.nom = "CheckLinkRelation";
            cabinet.piece[0].traitement.prix = "35 $";
            console.log(`Le docteur détecte la maladie ${cabinet.piece[0].maladie} chez le patient ${cabinet.piece[0].nom} et lui donne une ordonance pour le traitement ${cabinet.piece[0].traitement.nom}`);
            cabinet.piece[0].etatSante = "En traitement"
            console.log(`L'état de santé de ${cabinet.piece[0].nom} est maintenant ${cabinet.piece[0].etatSante}`);
            console.log(`${cabinet.piece[0].nom} doit maintenant payer 50 $`)
        }
        else if (cabinet.piece[0].maladie == "azmatique") {
            cabinet.piece[0].traitement.nom = "Ventoline";
            cabinet.piece[0].traitement.prix = "40 $";
            console.log(`Le docteur détecte la maladie ${cabinet.piece[0].maladie} chez le patient ${cabinet.piece[0].nom} et lui donne une ordonance pour le traitement ${cabinet.piece[0].traitement.nom}`);
            cabinet.piece[0].etatSante = "En traitement"
            console.log(`L'état de santé de ${cabinet.piece[0].nom} est maintenant ${cabinet.piece[0].etatSante}`);
            console.log(`${cabinet.piece[0].nom} doit maintenant payer 50 $`)
        }
        else if (cabinet.piece[0].maladie == "syntaxError") {
            cabinet.piece[0].traitement.nom = "f12+doc";
            cabinet.piece[0].traitement.prix = "20 $";
            console.log(`Le docteur détecte la maladie ${cabinet.piece[0].maladie} chez le patient ${cabinet.piece[0].nom} et lui donne une ordonance pour le traitement ${cabinet.piece[0].traitement.nom}`);
            cabinet.piece[0].etatSante = "En traitement"
            console.log(`L'état de santé de ${cabinet.piece[0].nom} est maintenant ${cabinet.piece[0].etatSante}`);
            console.log(`${cabinet.piece[0].nom} doit maintenant payer 50 $`)
        }
        
    }
}

let cabinet = new Lieu("Cabinet", [])
let cimetière = new Lieu("Cimetière", [])
let salleAttente = new Lieu ("SalleAttente", [])
let pharmacie ={
    nom:"pharmacie",
    piece: [],
    recevoirClient(personne){
        if (personne.traitement.nom == "ctrl+maj+f") {
            if(personne.argent < 60){
                console.log("Désole vous n'avez pas assez d'argent, vous allez devoir allez au cimetiere")
                cimetière.piece.push(personne)
                personne.etatSante = "mort"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                pharmacie.piece.shift()
            }
            else{
                personne.argent -= 60
                console.log(`Payement accepeté, Il reste sur le compte de ${personne.nom} ${personne.argent} $`);
                pharmacie.piece.shift()
                personne.etatSante = "guérit"
                console.log(`${personne.nom} est  ${personne.etatSante}`)
                console.log(`l' etat santé de ${personne.nom}`)
                console.log(`${personne.nom} part de la pharmacie et on ne le revit jamais`)
            }
        }
        else if(personne.traitement.nom == "saveOnFocusChange") {
            if(personne.argent < 100){
                console.log("Désole vous n'avez pas assez d'argent, vous allez devoir allez au cimetiere")
                cimetière.piece.push(personne)
                personne.etatSante = "mort"
                console.log(`${personne.nom} est  ${personne.etatSante}`)
                pharmacie.piece.shift()
            }
            else{
                personne.argent -= 100
                console.log(`Payement accepeter, Il reste sur le compte de ${personne.nom} ${personne.argent} $`);
                pharmacie.piece.shift()
                personne.etatSante = "guérit"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                console.log(`${personne.nom} part de la pharmacie et on ne le revit jamais`)
            }
        }
        else if(personne.traitement.nom == "CheckLinkRelation") {
            if(personne.argent < 35){
                console.log("Désole vous n'avez pas assez d'argent, vous allez devoir allez au cimetiere")
                cimetière.piece.push(personne)
                personne.etatSante = "mort"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                pharmacie.piece.shift()
            }
            else{
                personne.argent -= 35
                console.log(`Payement accepeter, Il reste sur le compte de ${personne.nom} ${personne.argent} $`);
                pharmacie.piece.shift()
                personne.etatSante = "guérit"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                console.log(`${personne.nom} part de la pharmacie et on ne le revit jamais`)
            }
        }
        else if(personne.traitement.nom == "Ventoline") {
            if(personne.argent < 40){
                console.log("Désole vous n'avez pas assez d'argent, vous allez devoir allez au cimetiere")
                cimetière.piece.push(personne)
                personne.etatSante = "mort"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                pharmacie.piece.shift()
            }
            else{
                personne.argent -= 40
                console.log(`Payement accepeter, Il reste sur le compte de ${personne.nom} ${personne.argent} $`);
                pharmacie.piece.shift()
                personne.etatSante = "guérit"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                console.log(`${personne.nom} part de la pharmacie et on ne le revit jamais`)
            }
        }
        else if(personne.traitement.nom == "f12+doc") {
            if(personne.argent < 20){
                console.log("Désole vous n'avez pas assez d'argent, vous allez devoir allez au cimetiere")
                cimetière.piece.push(personne)
                personne.etatSante = "mort"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                pharmacie.piece.shift()
            }
            else{
                personne.argent -= 20
                console.log(`Payement accepeter, Il reste sur le compte de ${personne.nom} ${personne.argent} $`);
                pharmacie.piece.shift()
                personne.etatSante = "guérit"
                console.log(`${personne.nom} est ${personne.etatSante}`)
                console.log(`${personne.nom} part de la pharmacie et on ne le revit jamais`)
            }
        }
    }
}
// |nom|argent|cabinet|salle d'attente|diagnostique|patientIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|ctrl+maj+f|
// |unsave|saveOnFocusChange|
// |404|CheckLinkRelation|
// |azmatique|Ventoline|
// |syntaxError|f12+doc|


// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière. ( une fois le traitement acheté, le patient est guéri sinon go mourrir au cimetière)

// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |ctrl+maj+f|60€
// |saveOnFocusChange|100€
// |CheckLinkRelation|35€
// |Ventoline|40€
// |f12+doc|20€

// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.
// Tracer l'évolution au console.log des patients

console.log("L'hospital ouvre ses portes ");
console.log("Les patients entrent dans la salle d'attente");
salleAttente.piece.push(sangoku, optimus, marcus, darthVader,semicolon)
console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________")

//patient 1

console.log("Le docteur fait rentrer le patient");
doctor.patientIn()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");

doctor.diagnostic()
sangoku.paye(doctor, 50)
console.log("Le docteur fait sortir le patient :");
doctor.patientOut()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");
sangoku.goTo(salleAttente, pharmacie)
console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`${pharmacie.piece[0].nom} doit maintenat payer ${pharmacie.piece[0].traitement.prix} pour son traitement ${pharmacie.piece[0].traitement.nom}`);
pharmacie.recevoirClient(sangoku)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`_____________ ⬇ cimetiere ⬇ ____________`);
contPers(cimetière)
console.log("______________________________________________");
console.log("------------------------------------------------------------------------------------------------------------------------------------------");

//patienr 2

console.log("Le docteur fait rentrer le patient");
doctor.patientIn()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");

doctor.diagnostic()
optimus.paye(doctor, 50)
console.log("Le docteur fait sortir le patient :");
doctor.patientOut()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");
optimus.goTo(salleAttente, pharmacie)
console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`${pharmacie.piece[0].nom} doit maintenat payer ${pharmacie.piece[0].traitement.prix} pour son traitement ${pharmacie.piece[0].traitement.nom}`);
pharmacie.recevoirClient(optimus)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`_____________ ⬇ cimetiere ⬇ ____________`);
contPers(cimetière)
console.log("______________________________________________");
console.log("------------------------------------------------------------------------------------------------------------------------------------------");

//patient 3

console.log("Le docteur fait rentrer le patient");
doctor.patientIn()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");

doctor.diagnostic()
marcus.paye(doctor, 50)
console.log("Le docteur fait sortir le patient :");
doctor.patientOut()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");
marcus.goTo(salleAttente, pharmacie)
console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`${pharmacie.piece[0].nom} doit maintenat payer ${pharmacie.piece[0].traitement.prix} pour son traitement ${pharmacie.piece[0].traitement.nom}`);
pharmacie.recevoirClient(marcus)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`_____________ ⬇ cimetiere ⬇ ____________`);
contPers(cimetière)
console.log("______________________________________________");
console.log("------------------------------------------------------------------------------------------------------------------------------------------");

//patient 4

console.log("Le docteur fait rentrer le patient");
doctor.patientIn()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");

doctor.diagnostic()
darthVader.paye(doctor, 50)
console.log("Le docteur fait sortir le patient :");
doctor.patientOut()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");
darthVader.goTo(salleAttente, pharmacie)
console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`${pharmacie.piece[0].nom} doit maintenat payer ${pharmacie.piece[0].traitement.prix} pour son traitement ${pharmacie.piece[0].traitement.nom}`);
pharmacie.recevoirClient(darthVader)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`_____________ ⬇ cimetiere ⬇ ____________`);
contPers(cimetière)
console.log("______________________________________________");
console.log("------------------------------------------------------------------------------------------------------------------------------------------");

//patient 5

console.log("Le docteur fait rentrer le patient");
doctor.patientIn()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");

doctor.diagnostic()
semicolon.paye(doctor, 50)
console.log("Le docteur fait sortir le patient :");
doctor.patientOut()
console.log(`_____________ ⬇ Cabinet ⬇ ____________`);
contPers(cabinet)

console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log("______________________________________________");
semicolon.goTo(salleAttente, pharmacie)
console.log(`_____________ ⬇ salle d'attente ⬇ ____________`);
contPers(salleAttente)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`${pharmacie.piece[0].nom} doit maintenat payer ${pharmacie.piece[0].traitement.prix} pour son traitement ${pharmacie.piece[0].traitement.nom}`);
pharmacie.recevoirClient(semicolon)
console.log(`_____________ ⬇ Pharmacie ⬇ ____________`);
contPers(pharmacie)
console.log("______________________________________________");
console.log(`_____________ ⬇ cimetiere ⬇ ____________`);
contPers(cimetière)
console.log("______________________________________________");
console.log("------------------------------------------------------------------------------------------------------------------------------------------");