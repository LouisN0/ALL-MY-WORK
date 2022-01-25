// - # Exo 1 Switch
//     - ## Stockez dans une variable, via un prompt, un jour de la semaine.
//     - ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
//         - ### Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

// let jours = prompt("Donner un jour de la semaine sans mettre de majuscules");
// switch(jours){
//     case "lundi":
//         console.log("14h : rdv dentiste");
//         break;
//     case "mercredi":
//         console.log("17h30: foot");
//         break;
//     case "vendredi":
//         console.log("sortire les poubelles");
//         break;
//     default:
//         console.log("rien")
// }

// - # Exo 2 Switch
//     - ## Déclarer une variable qui prendra comme valeur un type de météo
//     - ## À l'aide d'un switch, affichez une réaction appropriée au temps
//         - ### Ex: Il pleut. Je prend un parapluie

// let meteo = prompt("Quel temps fait-il: soleil, pluie , neige")
// switch(meteo){
//     case "soleil":
//         console.log("Ne pas oublier ses lunettes de soleil");
//         break;
//     case "pluie":
//         console.log("Ne pas oublier un parapluie");
//         break;
//     case "neige":
//         console.log("Ne pas oublier de s'abiller chaudement");
//         break;
// }

// - # Exo 3 Switch
//     - ### Déclarez une variable dont la valeur sera donnée par l'utilisateur.
//     - ### Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"

let nombre = +prompt("Donner un nombre")
 switch(nombre%2){
    case 0:
        alert("Ce nombre est divisible par deux");
        break;
    case 1:
        alert("Ce nombre n'est pas divisible par deux");
        break;
    default:
        alert("Ce n'est pas un nombre")
}

// - # Exo 4 Switch
//     - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;
//     - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.
//         - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4

// let nombre1 = +prompt("Donner un nombre")
// let operateur = prompt("Donner un operateur")
// let nombre2 = +prompt("Donner un nombre")
// switch(operateur){
//     case "-":
//         alert(nombre1 - nombre2);
//         break;
//     case "+":
//         alert(nombre1 + nombre2);
//         break;
//     case "*":
//         alert(nombre1 * nombre2);
//         break;
//     case "/":
//         alert(nombre1 / nombre2);
//         break;
//     default:
//         alert("Vous n'avez pas mis d'operateur vallable")
// }