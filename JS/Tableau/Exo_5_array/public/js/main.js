// 1er exo
let texte = "texte random"
let tabExo = ['Louis', texte, 1, 3.3, true]
console.log(tabExo)

// 2eme exo
console.log(tabExo.length)

// 3eme exo
let tabExo1 = tabExo.pop()
console.log(tabExo)

// 4eme exo
let tabExo2 = tabExo.shift()
console.log(tabExo)

// 5eme exo
let tabExo3 = tabExo.unshift('AVION', 'TRAIN')
console.log(tabExo)

// 6eme exo
let tabExo4 = tabExo.unshift('Janvier', 'Fevrier', 'Mars')
console.log(tabExo)

// 7eme exo
let tabExo5 = tabExo.reverse()
console.log(tabExo)

// 8eme exo
let armoire = []
objet1 = armoire.push(' Chaussettes')
objet2 = armoire.push(' petites voitures')
alert(armoire)
objet3 = armoire.unshift(' pull')
alert(armoire)
tasObjet = armoire.push('lit', 'televison', 'une brique de lego')
alert(armoire)
moins1 = armoire.shift()
moins2 = armoire.shift()
moins3 = armoire.shift()
objet1 = armoire.push('maman')
alert(armoire.length)
moins4 = armoire.pop()
moins5 = armoire.pop()
moins6 = armoire.shift()
moins7 = armoire.shift()
alert(armoire)