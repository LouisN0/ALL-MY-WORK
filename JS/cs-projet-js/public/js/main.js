
let produits = [
    {
        img: './public/img/fashion/img1.jpg',
        imgverso: './public/img/fashion/img1verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img2.jpg',
        imgverso: './public/img/fashion/img2verso.jpg',
        nom:'Traveller Shirt',
        prix: '$510.00'
    },
    {
        img: './public/img/fashion/img3.jpg',
        imgverso: './public/img/fashion/img3verso.jpg',
        nom:'Crewneck Sweatshirt',
        prix1: '$20.00',
        prix2: '$50.00'
    },
    {
        img: './public/img/fashion/img4.jpg',
        imgverso: './public/img/fashion/img4verso.jpg',
        nom:'Skinny Trousers',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img5.jpg',
        imgverso: './public/img/fashion/img5verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img6.jpg',
        imgverso: './public/img/fashion/img6verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img7.jpg',
        imgverso: './public/img/fashion/img7verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img8.jpg',
        imgverso: './public/img/fashion/img8verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img9.jpg',
        imgverso: './public/img/fashion/img9verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },
    {
        img: './public/img/fashion/img10.jpg',
        imgverso: './public/img/fashion/img10verso.jpg',
        nom:'Textured Sweater',
        prix: '$50.00'
    },

]

// let products = document.getElementById('products')
// let row = document.createElement('div')
// let contImg = document.createElement('div')
// let img = document.createElement('img')
// let titreProd = document.createElement('p')
// let prix = document.createElement('p')
// let divOver = document.createElement('div')
// let elem1Over = document.createElement('div')
// let elem2Over = document.createElement('div')
// let heart = document.createElement('i')
// let cart = document.createElement('i')
// row.setAttribute('class', 'row mx-5')
// contImg.style.width = '19%'
// img.setAttribute('src', produits[0].img)
// img.setAttribute('class', 'w-100')
// img.style.pointerEvents = 'none'
// titreProd.innerText = produits[0].nom
// titreProd.setAttribute('class','text-center fw-bold mb-1')
// prix.innerHTML = produits[0].prix
// prix.setAttribute('class','text-center')
// divOver.setAttribute('class','row')
// divOver.style.position = 'relative'
// divOver.style.top = '-100px'
// divOver.style.height = '0vh'
// divOver.style.paddingLeft = '12px'
// divOver.style.paddingRight = '12px'
// divOver.style.opacity = '0.98'
// heart.setAttribute('class','far fa-heart text-white')
// heart.style.display = 'none'
// cart.setAttribute('class','fas fa-shopping-cart text-white')
// cart.style.display = 'none'
// elem1Over.setAttribute('class', 'bg-dark col-lg-6 border-end d-flex align-items-center justify-content-center')
// elem2Over.setAttribute('class', 'bg-dark col-lg-6 d-flex align-items-center justify-content-center')
// products.appendChild(row)
// row.appendChild(contImg)
// contImg.appendChild(img)
// contImg.appendChild(titreProd)
// contImg.appendChild(prix)
// contImg.appendChild(divOver)
// divOver.appendChild(elem1Over)
// elem1Over.appendChild(heart)
// divOver.appendChild(elem2Over)
// elem2Over.appendChild(cart)
// contImg.addEventListener('mouseover', function () {
//     setTimeout(function () {
//         img.setAttribute('src', produits[0].imgverso)
//         divOver.style.height = '4vh'
//         heart.style.display = 'block'
//         cart.style.display = 'block'
//     },200)
    
// }, false)
// contImg.addEventListener('mouseout', function () {
//     setTimeout(function () {
//         img.setAttribute('src', produits[0].img)
//         divOver.style.height = '0vh'
//         heart.style.display = 'none'
//         cart.style.display = 'none'
//     } ,300)
    
// }, false)

let products = document.getElementById('products')
let contImg  
let img 
let titreProd 
let prix
let divOver 
let elem1Over
let elem2Over
let heart
let cart 
let row = document.createElement('div')
let h2 = document.createElement('h2')
let pH2 = document.createElement('p')
h2.setAttribute('class', 'text-center mt-5')
pH2.setAttribute('class', 'text-center text-secondary')
h2.innerHTML = 'Recent Products'
pH2.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry printing and industry'
products.appendChild(h2)
products.appendChild(pH2)
let i = 0
while(i < 10){
    
    contImg = document.createElement('div')
    img = document.createElement('img')
    titreProd = document.createElement('p')
    prix = document.createElement('p')
    divOver = document.createElement('div')
    elem1Over = document.createElement('div')
    elem2Over = document.createElement('div')
    heart = document.createElement('i')
    cart = document.createElement('i')
    row.setAttribute('class', 'row mx-5 d-flex align-items-center justify-content-center mt-5 mb-5')
    contImg.style.width = '19%'
    contImg.style.position = 'relative'
    contImg.setAttribute('class', 'hover')
    img.setAttribute('src', produits[i].img)
    img.setAttribute('class', 'w-100 sang')
    img.style.pointerEvents = 'none'
    titreProd.innerText = produits[i].nom
    titreProd.setAttribute('class','text-center fw-bold mb-1 Textnoir')
    prix.innerHTML = produits[i].prix
    prix.setAttribute('class','text-center Textnoir')
    divOver.setAttribute('class','row divOver')
    divOver.style.position = 'absolute'
    divOver.style.bottom = '65px'
    divOver.style.width = '100%'
    // divOver.style.height = '0vh'

    divOver.style.paddingLeft = '12px'
    divOver.style.paddingRight = '12px'
    divOver.style.opacity = '0.98'
    heart.setAttribute('class','far fa-heart heart')
    heart.style.color = 'white'
    heart.style.display = 'none'
    cart.setAttribute('class','fas fa-shopping-cart cart')
    cart.style.color = 'white'
    cart.style.display = 'none'
    elem1Over.setAttribute('class', 'bg-dark col-lg-6 border-end d-flex align-items-center justify-content-center elem1')
    elem2Over.setAttribute('class', 'bg-dark col-lg-6 d-flex align-items-center justify-content-center elem2')
    products.appendChild(row)
    row.appendChild(contImg)
    contImg.appendChild(img)
    contImg.appendChild(titreProd)
    contImg.appendChild(prix)
    contImg.appendChild(divOver)
    divOver.appendChild(elem1Over)
    elem1Over.appendChild(heart)
    divOver.appendChild(elem2Over)
    elem2Over.appendChild(cart)
    i++
    }
    
let tabContImg = [...document.getElementsByClassName('hover')]
let tabImg = [...document.getElementsByClassName('sang')]
let tabDivOver = [...document.getElementsByClassName('divOver')]
let tabHeart = [...document.getElementsByClassName('heart')]
let tabCart = [...document.getElementsByClassName('cart')]
let tabelem1Over = [...document.getElementsByClassName('elem1')]
let tabelem2Over = [...document.getElementsByClassName('elem2')]
let rond1 = document.getElementsByClassName('rond1')[0]
rond1.style.display = 'flex'
let rond2 = document.getElementsByClassName('rond1')[1]
tabelem1Over[0].onclick = () => {
    if (tabHeart[0].style.color == 'red') {
        tabHeart[0].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[0].style.color == 'white'){
        tabHeart[0].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[0].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[0].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[1].onclick = () => {
    if (tabHeart[1].style.color == 'red') {
        tabHeart[1].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[1].style.color == 'white'){
        tabHeart[1].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[1].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[1].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[2].onclick = () => {
    if (tabHeart[2].style.color == 'red') {
        tabHeart[2].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[2].style.color == 'white'){
        tabHeart[2].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[2].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[2].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[3].onclick = () => {
    if (tabHeart[3].style.color == 'red') {
        tabHeart[3].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[3].style.color == 'white'){
        tabHeart[3].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[3].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[3].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[4].onclick = () => {
    if (tabHeart[4].style.color == 'red') {
        tabHeart[4].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[4].style.color == 'white'){
        tabHeart[4].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[4].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[4].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[5].onclick = () => {
    if (tabHeart[5].style.color == 'red') {
        tabHeart[5].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[5].style.color == 'white'){
        tabHeart[5].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[5].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[5].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[6].onclick = () => {
    if (tabHeart[6].style.color == 'red') {
        tabHeart[6].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[6].style.color == 'white'){
        tabHeart[6].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[6].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[6].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[7].onclick = () => {
    if (tabHeart[7].style.color == 'red') {
        tabHeart[7].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[7].style.color == 'white'){
        tabHeart[7].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[7].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[7].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[8].onclick = () => {
    if (tabHeart[8].style.color == 'red') {
        tabHeart[8].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[8].style.color == 'white'){
        tabHeart[8].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[8].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[8].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabelem1Over[9].onclick = () => {
    if (tabHeart[9].style.color == 'red') {
        tabHeart[9].style.color = 'white'
        rond1.innerHTML = Number(rond1.innerHTML) - 1
    }
    else if(tabHeart[9].style.color == 'white'){
        tabHeart[9].style.color = 'red'
        rond1.innerHTML = Number(rond1.innerHTML) + 1
    }else if (Number(rond1.innerHTML) == 1 && tabHeart[9].style.color == 'red'){
        rond1.style.display = 'none'
    }
}
tabelem2Over[9].onclick = () => {
        rond2.innerHTML = Number(rond2.innerHTML) + 1
}

tabContImg[0].addEventListener('mouseover', function () {
    tabImg[0].setAttribute('src', produits[0].imgverso)
    tabDivOver[0].style.height = '4vh'
    tabHeart[0].style.display = 'block'
    tabCart[0].style.display = 'block'
})
tabContImg[0].addEventListener('mouseout', function () {
    tabImg[0].setAttribute('src', produits[0].img)
    tabDivOver[0].style.height = '0vh'
    tabHeart[0].style.display = 'none'
    tabCart[0].style.display = 'none'
})
tabContImg[1].addEventListener('mouseover', function () {
    tabImg[1].setAttribute('src', produits[1].imgverso)
    tabDivOver[1].style.height = '4vh'
    tabHeart[1].style.display = 'block'
    tabCart[1].style.display = 'block'
})
tabContImg[1].addEventListener('mouseout', function () {
    tabImg[1].setAttribute('src', produits[1].img)
    tabDivOver[1].style.height = '0vh'
    tabHeart[1].style.display = 'none'
    tabCart[1].style.display = 'none'
})
tabContImg[2].addEventListener('mouseover', function () {
    tabImg[2].setAttribute('src', produits[2].imgverso)
    tabDivOver[2].style.height = '4vh'
    tabHeart[2].style.display = 'block'
    tabCart[2].style.display = 'block'
})
tabContImg[2].addEventListener('mouseout', function () {
    tabImg[2].setAttribute('src', produits[2].img)
    tabDivOver[2].style.height = '0vh'
    tabHeart[2].style.display = 'none'
    tabCart[2].style.display = 'none'
})
tabContImg[3].addEventListener('mouseover', function () {
    tabImg[3].setAttribute('src', produits[3].imgverso)
    tabDivOver[3].style.height = '4vh'
    tabHeart[3].style.display = 'block'
    tabCart[3].style.display = 'block'
})
tabContImg[3].addEventListener('mouseout', function () {
    tabImg[3].setAttribute('src', produits[3].img)
    tabDivOver[3].style.height = '0vh'
    tabHeart[3].style.display = 'none'
    tabCart[3].style.display = 'none'
})
tabContImg[4].addEventListener('mouseover', function () {
    tabImg[4].setAttribute('src', produits[4].imgverso)
    tabDivOver[4].style.height = '4vh'
    tabHeart[4].style.display = 'block'
    tabCart[4].style.display = 'block'
})
tabContImg[4].addEventListener('mouseout', function () {
    tabImg[4].setAttribute('src', produits[4].img)
    tabDivOver[4].style.height = '0vh'
    tabHeart[4].style.display = 'none'
    tabCart[4].style.display = 'none'
})
tabContImg[5].addEventListener('mouseover', function () {
    tabImg[5].setAttribute('src', produits[5].imgverso)
    tabDivOver[5].style.height = '4vh'
    tabHeart[5].style.display = 'block'
    tabCart[5].style.display = 'block'
})
tabContImg[5].addEventListener('mouseout', function () {
    tabImg[5].setAttribute('src', produits[5].img)
    tabDivOver[5].style.height = '0vh'
    tabHeart[5].style.display = 'none'
    tabCart[5].style.display = 'none'
})
tabContImg[6].addEventListener('mouseover', function () {
    tabImg[6].setAttribute('src', produits[6].imgverso)
    tabDivOver[6].style.height = '4vh'
    tabHeart[6].style.display = 'block'
    tabCart[6].style.display = 'block'
})
tabContImg[6].addEventListener('mouseout', function () {
    tabImg[6].setAttribute('src', produits[6].img)
    tabDivOver[6].style.height = '0vh'
    tabHeart[6].style.display = 'none'
    tabCart[6].style.display = 'none'
})
tabContImg[7].addEventListener('mouseover', function () {
    tabImg[7].setAttribute('src', produits[7].imgverso)
    tabDivOver[7].style.height = '4vh'
    tabHeart[7].style.display = 'block'
    tabCart[7].style.display = 'block'
})
tabContImg[7].addEventListener('mouseout', function () {
    tabImg[7].setAttribute('src', produits[7].img)
    tabDivOver[7].style.height = '0vh'
    tabHeart[7].style.display = 'none'
    tabCart[7].style.display = 'none'
})
tabContImg[8].addEventListener('mouseover', function () {
    tabImg[8].setAttribute('src', produits[8].imgverso)
    tabDivOver[8].style.height = '4vh'
    tabHeart[8].style.display = 'block'
    tabCart[8].style.display = 'block'
})
tabContImg[8].addEventListener('mouseout', function () {
    tabImg[8].setAttribute('src', produits[8].img)
    tabDivOver[8].style.height = '0vh'
    tabHeart[8].style.display = 'none'
    tabCart[8].style.display = 'none'
})
tabContImg[9].addEventListener('mouseover', function () {
    tabImg[9].setAttribute('src', produits[9].imgverso)
    tabDivOver[9].style.height = '4vh'
    tabHeart[9].style.display = 'block'
    tabCart[9].style.display = 'block'
})
tabContImg[9].addEventListener('mouseout', function () {
    tabImg[9].setAttribute('src', produits[9].img)
    tabDivOver[9].style.height = '0vh'
    tabHeart[9].style.display = 'none'
    tabCart[9].style.display = 'none'
})









let titres = ["WE LOVE DIGITAL AGENCIES", "WE LOVE FROM LAYOUT", "I LOVE CREATIVE DESIGN", "THIS BRAND IS DOPE", "I LOVE THE WEBSITE"]
let noms = ["Mattie Stepanek", "Shoko Mugikura", "Alexander Horvard"]
let photo = ["./public/img/testimonials/image-1-1.png", "./public/img/testimonials/image-2.png", "./public/img/testimonials/image-3.png"]

let h41 = document.getElementsByTagName('h4')[0]
let h42 = document.getElementsByTagName('h4')[1]
let h43 = document.getElementsByTagName('h4')[2]
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let nom1 = document.getElementById('nom1')
let nom2 = document.getElementById('nom2')
let nom3 = document.getElementById('nom3')

let arrowR = document.getElementById('arrowR')
let arrowL = document.getElementById('arrowL')




arrowR.onclick = () => {
    let swap = h41.innerText
    h41.innerText = h42.innerText
    h42.innerText = h43.innerText
    h43.innerText = swap

    let swap2 = img1.attributes[2].nodeValue
    img1.attributes[2].nodeValue = img2.attributes[2].nodeValue
    img2.attributes[2].nodeValue = img3.attributes[2].nodeValue
    img3.attributes[2].nodeValue = swap2

    let swap3 = nom1.innerText
    nom1.innerText = nom2.innerText
    nom2.innerText = nom3.innerText
    nom3.innerText = swap3
}

arrowL.onclick = () => {
    let swap = h43.innerText
    h43.innerText = h42.innerText
    h42.innerText = h41.innerText
    h41.innerText = swap

    let swap2 = img3.attributes[2].nodeValue
    img3.attributes[2].nodeValue = img2.attributes[2].nodeValue
    img2.attributes[2].nodeValue = img1.attributes[2].nodeValue
    img1.attributes[2].nodeValue = swap2

    let swap3 = nom3.innerText
    nom3.innerText = nom2.innerText
    nom2.innerText = nom1.innerText
    nom1.innerText = swap3
}

let section2 = document.getElementById('section2')
let navabar = document.getElementsByClassName('navbar')[0]
let aMenu = [...document.getElementsByClassName('aMenu')]
let logo = document.getElementById('logo')
let icone = [...document.getElementsByClassName('icone')]
let a = 0
let b = 0
console.log(aMenu.length);
console.log(window.scrollY);
window.addEventListener('scroll', () => {
    // scroll event detected
    if (window.scrollY > 847.5) {
        navabar.style.backgroundColor = '#232b2b'
        while (a < aMenu.length) {
            aMenu[a].style.color = 'white'
            a++
        }
        while (b < icone.length) {
            icone[b].style.color = 'white'
            b++
        }
        
        logo.attributes[2].nodeValue = "./public/img/white-logo.png"
    }
    else if(window.scrollY < 847.5){
        navabar.style.backgroundColor = '#f5ebdf'
        while (a < aMenu.length) {
            aMenu[a].style.color = 'black'
            a++
        }
        a = 0
        while (b < icone.length) {
            icone[b].style.color = 'black'
            b++
        }
        b = 0
        logo.attributes[2].nodeValue = "./public/img/logo.png"
    }
    
  })

console.log(window.scrollY);

let btnNuit = document.getElementsByClassName('btnNuit')[0]
let textNoir = [...document.getElementsByClassName('Textnoir')]
let backBlack = [...document.getElementsByClassName('backBlack')]
let c = 0
let d = 0
let e = 0
let f = 0
btnNuit.setAttribute('name', 'cliquer')
console.log(btnNuit.attributes[1].nodeValue);
btnNuit.onclick = () => {
    if(btnNuit.attributes[1].nodeValue == 'cliquer'){
        btnNuit.setAttribute('name', 'pascliquer')
        while (d < textNoir.length) {
            textNoir[d].style.color = '#232b2b'
            
        d++
        }
        while (e < backBlack.length) {
            backBlack[e].style.backgroundColor = 'white'
        e++
        }
        e = 0
        d = 0
    }
    else if(btnNuit.attributes[1].nodeValue == 'pascliquer'){
        btnNuit.setAttribute('name', 'cliquer')
        while (c < textNoir.length) {
            textNoir[c].style.color = 'white'
        c++
        }
        while (e < backBlack.length) {
            backBlack[e].style.backgroundColor = '#232b2b'
        e++
        }
        e = 0
        c = 0
    }
    
}
