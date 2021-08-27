let divs = document.querySelectorAll('div')

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        console.log(this.getAttribute('id'))
    })
}