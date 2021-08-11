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
/*let num =3;
if (num) {
    console.log('значение true');
} else {
    console.log('значение false');
}*/
// условие ? выражение1 : выражение2 
/*Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?), 
затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно. 
Он часто используется в качестве укороченного варианта условного оператора if.*/

let personAge = 17;
/*if (personAge < 18){
    message = 'Человек не совершеннолетний';
} else {
    message = 'Человек совершеннолетний!';
}*/
let message = personAge<18 
? 'Человек НЕ совершеннолетний' 
: 'Человек совершеннолетний';
console.log(message);

