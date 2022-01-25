let plus = document.getElementById('plus')
let todo = document.getElementById('todo')
plus.onclick = function() {
    //creation des elements
    let divNewTodo = document.createElement('div')
    let pNewTodo = document.createElement('input')
    let trash = document.createElement('i')
    let dropdown = document.createElement('div')
    let btnDropdown = document.createElement('button')
    let ulDropdown = document.createElement('ul')
    let liDropdown1 = document.createElement('li')
    let aDropdown1 = document.createElement('a')
    let liDropdown2 = document.createElement('li')
    let aDropdown2 = document.createElement('a')
    //lien des elements entres eux
    todo.appendChild(divNewTodo)
    divNewTodo.appendChild(pNewTodo)
    divNewTodo.appendChild(trash)
    divNewTodo.appendChild(dropdown)
    dropdown.appendChild(btnDropdown)
    dropdown.appendChild(ulDropdown)
    ulDropdown.appendChild(liDropdown1)
    liDropdown1.appendChild(aDropdown1)
    ulDropdown.appendChild(liDropdown2)
    liDropdown2.appendChild(aDropdown2)
    //contenu de pNewTodo
    pNewTodo.style.background = "#e0e0e0"
    pNewTodo.style.border = 'none'
    pNewTodo.value = 'choose a title'
    pNewTodo.setAttribute('class', 'mb-0 ms-3 noFocus div')
    pNewTodo.onclick = function () {
    pNewTodo.value = ''
    }
    //contenu de divNewTodo
    divNewTodo.setAttribute('class', 'mb-4 align-items-center div2')
    divNewTodo.style.display = 'flex'
    divNewTodo.style.background = '#e0e0e0'
    divNewTodo.style.boxShadow = "11px 11px 22px #c5c5c5,-11px -11px 22px #fbfbfb"
    divNewTodo.style.borderRadius = '25px'
    divNewTodo.style.height = '5vh'
    divNewTodo.style.display = 'flex'
    //contenu de trash
    trash.setAttribute('class', 'fas fa-trash ms-auto')
    trash.style.cursor = 'pointer'
    trash.onclick = function () {
        divNewTodo.remove()
    }
    //contenu de dropdown
    dropdown.setAttribute('class', 'dropdown  mx-5')
    //contenu de btnDropdown
    btnDropdown.setAttribute('class', 'btn dropdown-toggle noFocus')
    btnDropdown.setAttribute('type', 'button')
    btnDropdown.setAttribute('id', 'dropdownMenuButton1')
    btnDropdown.setAttribute('data-bs-toggle', 'dropdown')
    btnDropdown.setAttribute('aria-expanded', 'false')
    btnDropdown.innerText = 'Choose the state'
    //contenu de ulDropdown
    ulDropdown.setAttribute('class', 'dropdown-menu')
    ulDropdown.setAttribute('aria-labelledby', 'dropdownMenuButton1')
    ulDropdown.style.backgroundColor = '#e0e0e0'
    //contenu de aDropdown1
    aDropdown1.setAttribute('class', 'dropdown-item')
    aDropdown1.innerText = 'Done'
    aDropdown1.onclick = function () {
        btnDropdown.innerText = 'Done'
        btnDropdown.style.background = '#90EE90'
        pNewTodo.name = 'done'
    }
    //contenu de aDropdown1
    aDropdown2.setAttribute('class', 'dropdown-item')
    aDropdown2.innerText = 'To do'
    aDropdown2.onclick = function () {
        btnDropdown.innerText = 'To do'
        btnDropdown.style.background = '#FF7F7F'
        pNewTodo.name = 'todo'
    }
}

let all = document.getElementById('all')
let toDo = document.getElementById('toDo')
let done = document.getElementById('done')
let cleraAll = document.getElementById('clear')

clear.onclick = function () {
    let allDiv = [...document.getElementsByClassName('div2')]
    let i = 0
    
    while (i < allDiv.length) {
        allDiv[i].remove()
        console.log(allDiv[i]);
        i++
    }
}

all.onclick = function () {
    let allDiv = [...document.getElementsByClassName('div')]
    console.log(allDiv.length);
    let i = 0
    while (i < allDiv.length) {
        document.getElementsByClassName('div2')[i].style.display = 'flex'
        console.log(document.getElementsByClassName('div')[i]);
        i++
    }
}
toDo.onclick = function () {
    let allDiv = [...document.getElementsByClassName('div')]
    let i = 0
    while (i < allDiv.length) {
        if(document.getElementsByClassName('div')[i].name == 'done') {
            document.getElementsByClassName('div2')[i].style.display = 'none'
        }
        else{
            document.getElementsByClassName('div2')[i].style.display = 'flex'
        }
        i++
    }
}
done.onclick = function () {
    let allDiv = [...document.getElementsByClassName('div')]
    let i = 0
    while (i < allDiv.length) {
        if(document.getElementsByClassName('div')[i].name == 'todo') {
            document.getElementsByClassName('div2')[i].style.display = 'none'
        }
        else{
            document.getElementsByClassName('div2')[i].style.display = 'flex'
        }
        i++
    }
}

