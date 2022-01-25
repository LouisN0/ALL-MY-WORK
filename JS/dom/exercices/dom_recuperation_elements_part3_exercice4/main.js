let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%',
}

let elements = document.querySelectorAll('#liste-competences>h2')
console.log(elements);
//2

for (const key in competences){
    console.log(`${key} : ${competences[key]}`);
}

let i = 0
for (const key in competences){
    elements[i].innerText += " " + competences[key]
}
