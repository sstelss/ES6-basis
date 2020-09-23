// let - изменяемая переменная
// let a = 'Variable a'
// let b = 'Variable b'

// // в ES6 можем создать скоуп таким образом
// {
//   a = 'New Variable A'
//   let b = 'local Variable b'
//   console.log('Scoope A: ', a)
//   console.log('Scoope B: ', b)

// }

// console.log('A: ', a)
// console.log('B: ', b)

//const - неизменяемая переменная
const PORT = 8080

// НО такое работает только с простыми типами
const array = ['JavaScript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'

// не сможем только такое сделать
// array = ''

console.log(array)


const obj = {}
obj.name = 'Vladilen'
obj.age = 24

console.log(obj)

delete obj.name

console.log(obj)