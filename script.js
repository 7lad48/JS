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
var carName ='Ford'
var carYear=2015
var personYear=1990

function calculateAge(year) {
    var currentYear=2021
    var result = currentYear-year
    return result
}    
function checkAge(year) {
    if (calculateAge(year) <10){
        console.log('возраст меньше 10 лет')
    } else {
        console.log('возраст больше 10 лет')
    }
}

checkAge(carYear)
checkAge(personYear)