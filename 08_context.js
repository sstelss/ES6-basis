// не стоит путать с scoope так как скоуп указывает на область видимости
// а контекст указывает на то как функция была вызвана

// const person = {
//   surname: 'Старк',
//   knows: function(what, name) {
//     console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//   }
// }

// person.knows('все', 'Бран')

// const john = { surname: 'Сноу' }
// // хочу вызвать метод knows в контексте обьекта john
// person.knows.call(john, 'ничего не', 'Джон')

// person.knows.apply(john, ['ничего не', 'Джон'])

// // отличие в том что тут возвращается функция
// person.knows.bind(john, 'ничего не', 'Джон')



// =========================================

// function Person(name, age) {
//   this.name = name
//   this.age = age

//   console.log(this)
// }

// // new создает новый контекст
// const elena = new Person ('Elena', 20)


// // =========
// // явная привязка
// function logThis() {
//   console.log(this)
// }

// const obj = {num: 42}

// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()



// ==============================
// неявная привязка контекста, к функции привязался контекст обьекта из которого он был вызван

// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this)
//   }
// }

// animal.logThis()



// стрелочные функции
// function создает себе новый контекст
// () не создает новый контекст

function Cat(color) {
  this.color = color
  console.log('This ', this)
  ;( () => console.log('Arrow this ', this))()
}

new Cat('red')











// function temp(obj) {
//   console.log(obj.name)
//   console.log(this)
// }

// let nn = {name: 'oleg'}
// temp(nn)