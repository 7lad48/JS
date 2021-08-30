/*let ps = document.querySelectorAll('p')
for (var i = 0; i <ps.length; i++) {
    ps[i].addEventListener('click', function(event) {
        event.target.style.color = event.target.style.color === 'blue'
        ? 'black'
        : 'blue' 
    })
}*/
document.getElementById('wrapper').addEventListener('click', function(event) {
    let tagName = event.target.tagName.toLowerCase()
    if (tagName === 'p') {
        event.target.style.color = 'blue'
    }
    if (event.target.classList.contains('color')){
        event.target.style.color = 'red'
    }
})
