document.querySelector('#alert').addEventListener('click', function() {
    alert('You click button!')
})

document.querySelector('#confirm').addEventListener('click', function() {
    let decision = confirm('Нажать на кнопку? Вы уверены?')

    console.log(decision)
    if(decision) {
        alert('Вы согласились хо хо')
    }
})
document.querySelector('#prompt').addEventListener('click', function() {
    let age = prompt('Введите свой возраст', 18)
    if(age >= 18) {
        alert('Вам больше 18')
    } else {
        alert('еще слишком молоды')
    }
})
console.warn('предупреждаю!')
console.error('Ошибкааа!')
console.info('информацияяя')