
import {Louis, epicerie, poele, bol, maison} from "./_variables.js"


/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

Louis.seDeplacer(maison)


// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

Louis.seDeplacer(epicerie)


// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)

Louis.prendre(epicerie.paniers, "mainDroite")
console.log(Louis.mainDroite);
console.log(epicerie.paniers);


// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 

// console.log(`${personnage.nom} a pris un ${type du panier}`);

console.log(Louis.nom + " a pris un " + Louis.mainDroite[0].nom);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage

Louis.faireLesCourses()

// Afficher un message à chaque ingrédient pris

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

Louis.payerArticle(Louis.mainDroite[0].contenu)
// Afficher un message de ce qu'il reste d'argent sur le personnage.

// rentrer à la maison (comme ça on pourra cuisiner)
Louis.seDeplacer(maison)
// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

Louis.placer(Louis.mainDroite[0])
// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
Louis.seDeplacer(epicerie)
Louis.remettreLePanier()
console.log(Louis.mainDroite)
// Afficher un petit message

// Retourner à la maison pour continuer l'omelette
Louis.seDeplacer(maison)
// Afficher un petit message

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

Louis.couper(bol.contenu)

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

bol.melanger("Ommelette")

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
bol.vider(poele)
// Cuire l'omelette avec la méthode de la poele 
console.log(poele.contenu);
poele.cuir(poele.contenu);
// Afficher un message final, notre omelette est cuite :)
