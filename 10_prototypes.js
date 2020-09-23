// ES6: __proto__ - указывает на прототип родительского класса
// раньше надо было юзать Object.getPrototypeOf()


// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// Cat.prototype.voice = function() {
//   console.log(`Cat ${this.name} says myay`)
// }

// const cat = new Cat('Kot', 'white')
// cat.voice()
// console.log(Cat.prototype)
// console.log(cat.__proto__ === Cat.prototype)
// // указывает на конструктор, то есть на родительский класс
// console.log(cat.constructor)


// ==================================
function Person() {}

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Vladilen'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))

//Object.create()
const proto = {year: 2019}
const myYear = Object.create(proto)

proto.year = 2200
console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)