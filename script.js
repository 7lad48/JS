//       Устаревшие методы
/*let div = document.getElementById('playground')
let p = document.getElementsByClassName('text')
console.log(div)
console.log(p)
let h1 = document.getElementsByTagName('h1')
console.log(h1)*/
let div = document.querySelector('#playground')
console.log(div)
let p = document.querySelectorAll('p')
console.log(p)
let ul = document.querySelector('#playground >div ul')
console.log(ul)