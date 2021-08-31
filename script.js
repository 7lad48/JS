let num = 2.1
console.log(Math.random()) // рандомное число
console.log(Math.floor(num)) // округление в меньшую сторону, даже 2.9 == 2
console.log(Math.ceil(num)) // округление в большую 2.1 = 3

let person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford',
        year: '2008',
        color: 'Gray'
    },
    job: 'Frontend',
    friends: ['Elena','Igor']
}

let strObj = JSON.stringify(person) // переводим в JSON - объект в тектовый формат JSON

console.log(JSON.parse(strObj)) // обратная операция. Парсим строку в JS объект. т.ж можно в переменную сохр. готовый объект...