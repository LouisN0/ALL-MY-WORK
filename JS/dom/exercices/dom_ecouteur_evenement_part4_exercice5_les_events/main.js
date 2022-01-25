let div1 = document.getElementById('content');

function fonction1(e) {
    e.target.style.border = '1px solid red'
}
div1.addEventListener('click', fonction1, false);