let a = document.querySelector('a')
let oldHref = a.getAttribute('href')

a.setAttribute('href','https://ya.ru')
a.setAttribute('title','go to yandex')
a.textContent='YandeX'

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
box1.classList.add('red')
box2.classList.remove('blue')
var hasClass = box2.classList.contains('blue')
console.log(hasClass)
/*if (hasClass) {
    box2.classList.add('blue')
} else {
    box2.classList.remove('blue')
}*/
hasClass ? box2.classList.remove('blue') : box2.classList.add('blue')