import {epicerie, bol} from "./_variables.js"

export class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    }
    seDeplacer(lieu){
        this.lieu = lieu.nom
        lieu.personne.push(this)
        console.log(this.nom + " est actuellement à la " + this.lieu)
        
    }
    payerArticle(panier){
        let i = 0
        while(i < panier.length){
            this.argent -= panier[i].prix
            
            i++
        }
        console.log("Il reste a " + this.nom + " " + Math.round(this.argent * 100) / 100)
    }
    placer(panier){
        while(panier.contenu.length != 0){

            bol.contenu.push(panier.contenu[0])
            console.log(panier.contenu[0].nom + " est dans le bol");
            panier.contenu.shift()
            
        }
        console.log(this.mainDroite);
        console.log(bol);
    }
    couper(ingredient){
        let i = 0
        while (i < ingredient.length) {
            if (ingredient[i].etats == "entier") {
            ingredient[i].etats = "coupé"
            console.log(ingredient[i].nom + "a bien été coupé");
            i++
        }
        else{
            console.log( ingredient[i].nom + " ne peut pas être coupé ou l'a déja été")
            i++
        }
        }
        
    }
    remettreLePanier(){
        epicerie.paniers.push(this.mainDroite[0])
        this.mainDroite.shift()
        console.log(this.nom + " a rendu le panier");
    }
    prendre(objet, main){
        if(main == "mainDroite"){
            this.mainDroite.push(objet[0])
        }
        else{
            this.mainGauche.push(objet[0])
        }
        epicerie.paniers.shift()
    }
    faireLesCourses(){
        let i = 0
        while (i < epicerie.ingredients.length) {
            this.mainDroite[0].contenu.push(epicerie.ingredients[i]);
            console.log(this.nom + " a pris " + epicerie.ingredients[i].nom);
            i++;
        }
        console.log(this.mainDroite[0])
    }

}

export class Lieu {
    constructor(nom, personne){
        this.nom = nom;
        this.personne = personne;
    }
}

export class Outil {
    constructor(nom, action){
        this.nom = nom;
        this.action = action;
    }
}

export class Produits{
    constructor(nom, etats, prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}

export class Epicerie extends Lieu {
    constructor(nom, personne, ingredients){
        super(nom, personne);
        this.ingredients = ingredients,
        this.paniers = [
            {
                nom: "Panier 1",
                contenu: []
            },
            {
                nom: "Panier 2",
                contenu: []
            },
            {
                nom: "Panier 3",
                contenu: []
            }
        ]
    }
}