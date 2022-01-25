// #1
let sstitre = document.getElementsByTagName("div")[0].firstChild
let firstChild = sstitre.nextElementSibling
console.log(firstChild);
// #2
let titreNV3 = document.getElementById("titreNiv3")
console.log(titreNV3);
// #3
let avant = titreNV3.previousElementSibling
console.log(avant);
// #4
let petit = document.getElementsByClassName("petitParagraphe")[0]
let apres = petit.nextElementSibling
console.log(apres);
// #5
let important = document.getElementsByClassName("important")[3].nextElementSibling
console.log(important);
// #6
let list = document.getElementById("listElements")
let parent = list.parentElement
let enfant = parent.firstElementChild
console.log(enfant);
// #7
let un = document.getElementsByClassName("important")[3]
let deux = un.nextElementSibling
console.log(deux);
// #8
let textGeneral = document.getElementById("textGeneral")
let suite = textGeneral.nextElementSibling
let suite2 = suite.nextElementSibling
console.log(suite2);
// #9
let span = document.getElementsByTagName("span")[1]
let a = span.previousSibling
let b = a.parentElement
let c = b.nextElementSibling
let d = c.firstElementChild
console.log(d);
// #10
let nico = document.getElementsByTagName("b")[2]
let e = nico.previousSibling
let f = e.parentElement
let g = f.parentElement
let h = g.previousElementSibling
let i = h.firstElementChild
let j = i.firstElementChild
console.log(j);