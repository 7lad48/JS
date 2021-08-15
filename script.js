//numbers.push('Not a number')
//numbers.unshift('word')

/*for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}*/

/*for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue
    }
    console.log(numbers[i])
}
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue
    }
    console.log(numbers[i])
}*/
var numbers = [1,2,3,'trololo',4,5,6,7,8,9]
numbers.push('string')

for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'string') {
        break
    }
    console.log(numbers[i])
}

console.log('-------- continue продолжает цикл пропуская строки : -----------------')

for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'string') {
        continue
    }
    console.log(numbers[i])
}