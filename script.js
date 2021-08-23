//       Устаревшие методы
/*let div = document.getElementById('playground')
let p = document.getElementsByClassName('text')
console.log(div)
console.log(p)
let h1 = document.getElementsByTagName('h1')
console.log(h1)*/
let div = document.querySelector('#playground')
let p = document.querySelectorAll('p')
let h1 = document.querySelector('h1')
div.innerHTML = '<h2 style="color: red;">From JavaScript</h2>'
console.log(div.innerHTML)
console.log(h1.textContent)
h1.textContent = 'changed text from JS'
console.log(h1.textContent) 
let input = document.querySelector('input')
console.log(input.placeholder)
input.value= 'yeeeeaa'

