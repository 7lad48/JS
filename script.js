let carColor = 'red';

/*if (carColor === 'green') {
    console.log('car color is GREEN!');
} else if (carColor === 'yellow'){
    console.log('car color is YeLlOw!');
} else if (carColor === 'red'){
    console.log('car color is Red!');
} else {
    console.log('car color is undefined');
}*/
switch (carColor) {
    case 'green': console.log('car color is GREeN!');
    break
    case 'yellow': console.log('car color is Yellow!');
    break
    case 'red': console.log('car color is RED!');
    break
    default: console.log('car color is undefined');
}
var carYear = 2017
var personYear = 2009

function countAge(year){
    var currentYear=2021
    var result = currentYear-year
    return result
}
function compareYears(year, name, compareTo) {
    if (countAge(year) < compareTo) {
        console.log('возраст '+name+' меньше '+compareTo+' лет.')
    } else {
        console.log('возраст '+name+' больше '+compareTo+' лет.')
    }
}
compareYears(carYear,'авто', 7)