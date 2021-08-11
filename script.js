let currentYear = 2021;
let carName = 'Ford';
let carYear = 2017;
let carAge = currentYear-carYear;
if (carAge < 5) {
    console.log(carName + ' младше 5 лет');
} else if (carAge>=5 && carAge<=10) {
    console.log(carName + ' от 5 до 10 лет');
} else {
    console.log('Возраст '+carName+' = '+carAge+' лет.');
}
// При указании в if к значению false приводят:  0, null, undefined, пустая строка (''), NaN (not a number - не я вляется номером напр. при делении на 0)
let empty ='';
if (empty) {
    console.log('значение true');
} else {
    console.log('значение false');
}
