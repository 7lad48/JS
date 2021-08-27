let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

/*function buttonHandler() {
    console.log('clicked')
    input.value !== ''||' ' ?
    h1.textContent = input.value
    : window.alert('текст не введён')
}*/
function buttonHandler() {
    console.log('clicked')
    if (input.value.length < 1) {
        window.alert('текст не введён')
    } else { 
    h1.textContent = input.value
    }
}

h1.addEventListener('mouseenter', function () {
    this.style.color = 'red'
    this.style.backgroundColor = 'green'
    

})
h1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})

button.addEventListener('click', buttonHandler)