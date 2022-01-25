// 1. Via un console.log() vérifie l'egalité entre 1 et "1"
// console.log(1 == 1)
// 2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
// console.log(1 === 1)
// 3. Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

// let demande = prompt("Quel est votre prénom ?")
// let taille = demande.length
// if (taille < 5) {
//     alert("Nom trop court");
// }

// 4. Affiche une addit0ion a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

// let calcule = prompt("combien fait 2 + 2")
// if (calcule == 4) {
//     alert("bien jouer bg")
// }
// else{
//     alert("t'es con ou quoi ?")
// }

// 5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// let mult = prompt("combien fait 6 * 6")
// let diff = Math.abs(mult - 36) 
// if (mult == 36) {
//     alert("la réponse était bien 36")
// }
// else{
//     alert("C'est dommage, tu n'étais qu'a " + diff + " unité de la bonne réponse")
// }

// 6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

// let tableau = []

// do{
//     let raj = prompt("Quelles elements voulez vous mettre dans le tableau")
//     tableau.push(raj)
// }while(tableau.length < 3)
// alert("tableau remplis")

// 7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

// let grandNombres = []
// let petitNombres = []
// let nbr = 0

// do{
//     let question = prompt("quelles nombre voulez vous mettre ?")
//     if(question >= 12){
//         grandNombres.push(question)
//     }
//     else if(question < 12){
//         petitNombres.push(question)
//     }
//     nbr++
//      }while(nbr < 2)


// alert(grandNombres + petitNombres)

// 8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions

alert("ceci est une simple calculatrice qui effectue des calculs entre 2 nombres")

let premierNombre =+ prompt("premier nombre")

let signe = prompt("quelle signe")

let deuxiemeNombre = +prompt("deuxieme nombre")

if (signe == '+'){
    let addition = premierNombre + deuxiemeNombre
    alert("la response est: " + addition)
}

else if(signe == '-'){
    let soustraction = premierNombre - deuxiemeNombre
    alert("la response est: " + addition)
}

else if(signe == '*'){
    let multiplication = premierNombre * deuxiemeNombre
    alert("la response est: " + multiplication)
}

else if(signe == '/'){
    let division = premierNombre / deuxiemeNombre
    alert("la response est: " + division)
}
