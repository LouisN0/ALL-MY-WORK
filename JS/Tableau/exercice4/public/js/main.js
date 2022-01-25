// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22
let tableau = ["coding 20", "coding 21", "coding 22"]
// 2. Afficher les éléments de l'array
console.log(tableau)
// 3. Ajouter et afficher votre prenom a l'array
let NouveauTableau = tableau + ", Louis"
console.log(NouveauTableau)
// 4. Remplacer et afficher un élément de l'array par autre chose
let tableau3 = NouveauTableau.replace('coding 20', 'coding 32')
console.log(tableau3)
// 5. Effacer un élément de l'array
let tableauSupp = tableau3.replace('coding 21', '')
// 6. Afficher le contenu le d'array
console.log(tableauSupp)