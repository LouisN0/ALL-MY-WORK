// EX1
let nom = prompt("Comment tu t'appelles ?")

if (nom != null) {
    alert("Salut " + nom + ", moi c'est Louis")
}

// EX2
let age = prompt("Et quelle age as-tu ?")
if (age != null) {
    alert("Woaw tu as " + age + " ans" + " , Moi j'ai 19 ans")
}

// EX3
let prenom = prompt("Comment tu t'appelles ?")
let nomFamille = prompt("Et c'est quoi ton nom de famille ?")

if (prenom != null && nomFamille != null) {
    alert("Salut " + prenom + " " + nomFamille + ", moi c'est Louis Nollevaux")
}

// EX4
let prenom1 = prompt("Comment tu t'appelles ?")
let nomFamille1 = prompt("Et c'est quoi ton nom de famille ?")

if (prenom1 != null && nomFamille1 != null) {
    alert("Salut " + prenom1.toUpperCase() + " " + nomFamille1 + ", moi c'est Louis Nollevaux")
}