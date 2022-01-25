// EX1

// let nbr1 = +prompt("1er nombre")
// let nbr2 = +prompt("2eme nombre")

// if (nbr1 == nbr2){
//     alert("Le nombre 1 et le nombre 2 sont-ils égaux ? : OUI")
// }
// else{
//     alert("Le nombre 1 et le nombre 2 sont-ils égaux ? : NON")
// }

// EX2

// let nbr1 = +prompt("1er nombre")
// let nbr2 = +prompt("2eme nombre")

// if(nbr1 < nbr2){
//     alert("Le nombre 1 et-il plus petit que le nombre 2 ? : OUI")
// }
// else{
//     alert("Le nombre 1 et-il plus petit que le nombre 2 ? : NON")
// }

// EX3

// let nbr1 = +prompt("1er nombre")
// let nbr2 = +prompt("2eme nombre")
// let nbr3 = +prompt("3eme nombre")

// let addition = nbr1 + nbr2;
// if (addition > nbr3){
//     alert(" La somme du nombre 1 + le nombre 2 est-elle plus grande que le nombre 3 ? : TRUE")
// }
// else{
//     alert(" La somme du nombre 1 + le nombre 2 est-elle plus grande que le nombre 3 ? : FALSE")
// }

// EX4

// let phrase = prompt("Votre phrase:")
// let taille = phrase.length
// let question = prompt("Combien y a t-il de caracteres dans votre phrase ?")
// let diff = Math.abs(question - taille)

// if (taille == question){
//     alert("La reponse etait bien: " + question + " !")
// }
// else{
//     alert("Incorrect tu étais à " + diff + " unitées de la bonne réponse !")
// }

// EX5

// let nom = prompt("Entrer votre prénom")
// if (nom.length == 0){
//     prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
// }
// else{
//     alert("Bonjour, " + nom)
// }

// EX6

// let utilisateur = prompt("Voulez vous un abonnement ?")
// let taille = utilisateur.length
// console.log(taille)
// if (utilisateur == "oui"){
//     let choix = prompt("Quelle formule tu veux : luxe ou normal")
//     if(choix == "luxe"){
//         alert("Félicitation vous avez choisis le formule luxe !")
//     }
//     else{
//         alert("Merci pour votre abonnement")
//     }
// }
// else if(taille === 0){
//     let certain = prompt("Vous n'avez rien repondu etes vous certain ?")
//     if(certain == "oui"){
//         alert("Connard")
//     }
//     else{
//         let choix2 = prompt("Quelle formule tu veux : luxe ou normal")
//     if(choix2 == "luxe"){
//         alert("Félicitation vous avez choisis le formule luxe !")
//     }
//     else{
//         alert("Merci pour votre abonnement")
//     }
//     }
// }
// else{
//     alert("Sale rat")
// }

// EX7

// let question1 = prompt("1+1")
// let question2 = prompt("6*6")
// let reponse1 = 2
// let reponse2 = 36
// if (question1 == reponse1 && question2 == reponse2){
//     alert("Bien jouer bg !")
// }
// else if(question1 == reponse1 && question2 != reponse2 || question1 != reponse1 && question2 == reponse2){
//     if(question1 != reponse1){
//         alert("Presque tu as eu une faute à la question 1")
//     }
//     else if(question2 != reponse2){
//         alert("Presque tu as eu une faute à la question 2")
//     }
// }
// else{
//     alert("Aucune des reponse n'est juste :(")
// }

// EX8

// let age = +prompt("Quel est ton age")

// if(age > 100){
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
// }
// else if(age < 0){
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// }
// else if(age < 18){
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// }
// else if(age == 18){
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// }
// else if(age >= 18){
//     alert("vous êtes majeur, vous pouvez réserver")
// }

// ----AVANCE----

// let année = +prompt("Quel est ton année de naissance ?")
// let age = 2021 - année

// if(age > 100){
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
// }
// else if(age < 0){
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// }
// else if(age < 18){
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// }
// else if(age == 18){
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// }
// else if(age >= 18){
//     alert("vous êtes majeur, vous pouvez réserver")
// }

// EX9

let riche = prompt("est-ce que vous êtes riche ?")
let vacance = prompt("voulez-vous partir en vacance ?")
let chat = prompt("est-ce que vous avez un chat ?")

if(vacance != "oui"){
    

    if(riche == 'non' || chat == 'oui'){
    alert("Même si vous le voulez, vous ne pouvez pas partir.")
    }
    else if(riche == 'oui' && chat == 'non'){
        alert( "Vous pourriez partir en vacance si vous le voulez")
    }
    else if(riche == 'oui' && chat == 'non' && vacance == 'oui'){
        alert("Tout est parfait, partez en vacance !")
    }
    alert("pas de problème, ne partez pas en vacance")
}