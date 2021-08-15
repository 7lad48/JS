var cars = ['Ford','Tesla','Audi','Nissan']
cars.push('Mazda')
console.log(cars)
var mazda = cars.pop()
console.log(cars, mazda,'добавляем unshift(kia) в cars')
cars.unshift('kia')
console.log(cars)
console.log(cars.indexOf('kia'))
var kiaIndex=cars.indexOf('kia')
var kia =cars[kiaIndex]
console.log(kia)
