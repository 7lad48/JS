let days = 10;
let date = new Date(3600 * (24 * days) * 1000) // секунды * минуты * 24 часа * 1000 чтоб перевести в миллисекунды
console.log(date)
console.log(Date.now()) // получим ТАЙМШТАМП - кол-во мс с 1 января 1970 года до сейчас.