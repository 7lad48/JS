var person = {
    name: 'Vlad',
    year: 1995,
    color: 'white',
    prof: ['vr', 'pr'],
    cat: {
        name: 'Kisel',
        color: 'Orange',
        age: 2
    },
    calculateAge: function() {
        this.age = 2021-this.year // this.yeat = person.year
    }
}
person.calculateAge()
console.log(person)