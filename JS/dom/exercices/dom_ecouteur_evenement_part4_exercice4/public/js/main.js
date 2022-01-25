let entree = document.getElementsByTagName('input')[0]
entree.addEventListener("focus", function(){ entree.style.backgroundColor = "blue" });

let entree2 = document.getElementsByTagName('input')[1];
entree2.addEventListener("focus", function(){ entree2.style.backgroundColor = "blue"})
entree2.addEventListener("focusout", function(){ entree2.style.backgroundColor = "white"})

let permierParagraph = document.getElementsByTagName('p')[0]
let deuxiemeParagraph = document.getElementsByTagName('p')[1]
let troisiemeParagraph = document.getElementsByTagName('p')[2]
let bouton = document.getElementsByTagName('button')[0]


bouton.onclick = function () {
    permierParagraph.innerHTML = deuxiemeParagraph.innerHTML
    troisiemeParagraph.innerHTML = deuxiemeParagraph.innerHTML
}

let rename = document.getElementsByTagName('input')[2].value
console.log(rename);

let nomRename = document.getElementsByTagName('button')[1]
let aRemplacer = document.getElementById('exo4')
nomRename.onclick = function(){
    aRemplacer.innerHTML = rename
}

let bouton2 = document.getElementsByTagName('button')[2]
let img1 = document.getElementsByTagName('img')[0]
bouton2.onclick = function () {
    img1.setAttribute('src', './src/image/tartine.png')

}

let tartine = document.getElementsByTagName('img')[1]
let tartineSrc = ""
tartine.onclick = function () {
    tartineSrc = tartine.attributes[1].textContent
}

let tartine2 = document.getElementsByTagName('img')[2]
tartine2.onclick = function () {
    tartine2.setAttribute('src', tartineSrc)
}

document.getElementsByTagName('button')[3].onclick = function () {
    let c = document.getElementsByTagName('p')[5].innerHTML
    document.getElementsByTagName('p')[5].innerHTML = document.getElementsByTagName('p')[6].innerHTML
    document.getElementsByTagName('p')[6].innerHTML = c
}
 