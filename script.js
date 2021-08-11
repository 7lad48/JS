let currentYear = 2021;
let carName = 'Ford';
let carYear = 2008;
let carAge = currentYear-carYear;
if (carAge < 5) {
    console.log(carName + ' младше 5 лет');
} else if (carAge>=5 && carAge<=10) {
    console.log(carName + ' от 5 до 10 лет');
} else {
    console.log('Возраст '+carName+' = '+carAge+' лет.');
}