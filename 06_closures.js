// замыкание это когда функция имеет доступ к значению вышестоящего скоупа

// function sayHelloTo(name) {
//   const message = 'Hello ' + name

//   return function() {
//     console.log(message)
//   }
// }

// const helloToElena = sayHelloTo('Elena')
// console.log(helloToElena()) // вернет еще undefined так как функция по умолчанию возвращает undefined




// // Практическое применение

// function createFrameworkManager() {
//   const fw = ['Angular', 'React']

//   return {
//     print: function() {
//       console.log(fw.join(' '))
//     },
//     add: function(framework) {
//       fw.push(framework)
//     }

//   }
// }

// // здесь мы как бы сделали массив fw приватным и не можем к нему обращаться напрямую, только через методы, которые обьявили
// const manager = createFrameworkManager()
// // console.log(manager)
// manager.print()
// manager.add('VueJS')
// manager.print()

// const manager2 = createFrameworkManager()
// manager2.print()

// // будет ошибка!
// manager2.newFunc = function() {
//   fw.push('kokokokokok')
// }

// manager2.newFunc()



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

// такое поведение связанно с тем что цикл отрабатывает довольно быстро, а индекс добежал уже до 6 в данный момент и когда прошло время то каждый из асинхроных таймаутов обратился к индексу который уже равен 6
for (var i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${k}] = ${fib[k]}`)
  }, 1500)
}

// первый способ починить: заменить var на let
// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function() {
//     console.log(`fib[${i}] = ${fib[i]}`)
//   }, 1500)
// }


// // второй способ
// for (var i = 0; i < fib.length; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(`fib[${j}] = ${fib[j]}`)
//     }, 1500)
//   })(i)
// }


// function F (i) {
//   setTimeout(function() {
//     console.log(`fib[${i}] = ${fib[i]}`)
//   }, 1500)
// }

// for (var i = 0; i < fib.length; i++) {
//  F(i)

// }

