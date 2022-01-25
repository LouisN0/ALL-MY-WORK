let allLi = document.getElementsByTagName('li')

let tabLi = [...allLi]
console.log(tabLi);


// tabLi.forEach(element => {
//     element.onclick = function sayMyName(e) {
//         alert(e.target.innerHTML)
//     }
// });


//2
tabLi.forEach(element => {
    element.addEventListener('dblclick', () => {
        let change = prompt("Par quoi voulez vous changer le texte")
        element.innerHTML = change
    })
})

//3
let firstLi = document.getElementById('li-one')
let secLi = document.getElementById('li-two')
let btn1 = document.getElementsByTagName('input')[2]

btn1.addEventListener("click", () =>{
    let c = firstLi.value
    firstLi.value = secLi.value
    secLi.value = c
})
console.log(secLi.value);
