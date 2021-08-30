var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')

str2 = array.join(';')

let newArray = array.concat([1,2])
//console.log(newArray)

let objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
]

var foundPerson = objArr.find(function(person) {
    return person.age === 20
})

var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
    return i % 2 !==0
})

let arrayTwo = array.map(function(i) {
    return parseInt(i) // i * 2 - получим каждый элемент * 2
    // интересно, можно ли так? return (i * 2) / 2 вернутся же тоже числа...
})