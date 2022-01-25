import {Personne, Lieu, Outil, Produits, Epicerie} from "./_class.js";

export let Louis = new Personne("Louis", "maison", 200, [], [])
export let couteau = new Outil("couteau", )
export let oeuf = new Produits("oeuf", "entier", 1.95)
export let oignon = new Produits("oignon", "entier", 0.75)
export let epice = new Produits("epice", "moulu", 3.60)
export let fromage = new Produits("fromage", "coupé", 1.79)
export let epicerie = new Epicerie("épicerie", [], [oeuf, oignon, epice, fromage])
export let poele ={
    nom: "poele",
    contenu: [],
    cuir(element){
        console.log("L " + element + " est entrain de cuire ...");
       
        setTimeout(() =>{
             console.log("L" + element + " est cuite")
        }, 4000)
    }
}
export let bol ={
    contenu: [],
    melanger(nomMelange){
        let i = 0
        while (i < this.contenu.length)
        {
            this.contenu.shift()
            i++
        }
        this.contenu = nomMelange
        console.log("le mélange a donner une " + bol.contenu);  
    },
    vider(element){
        element.contenu.push(this.contenu)
        console.log(this.contenu + " a été vidée dans " + element.nom);
    }
}
export let maison = new Lieu("maison", [])