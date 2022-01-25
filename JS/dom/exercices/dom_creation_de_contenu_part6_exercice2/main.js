let ul = document.getElementsByTagName('ul')[0]
let btn1 = document.getElementsByTagName('input')[0]
let btn2 = document.getElementsByTagName('input')[1]
let btn3 = document.getElementsByTagName('input')[2]


btn1.onclick = function () {
    ul.removeChild(ul)
}
