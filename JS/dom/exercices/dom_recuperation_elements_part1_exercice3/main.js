
 let div = document.getElementsByTagName('div')[2]
console.log(div.firstElementChild);
console.log(div.lastElementChild);
console.log(div.lastElementChild.previousElementSibling.children[0]);

console.log(div.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild);

console.log(div.lastElementChild.previousElementSibling.children[0].parentElement);

console.log(div.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.parentElement);

console.log(div.firstElementChild.nextElementSibling); 