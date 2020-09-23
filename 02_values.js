// let a = 42
// let b = a
// b++
// console.log('a: ', a)
// console.log('b: ', b)


//arrays ну и все вычисляемые типы данных которые передаются по ссылке
// то есть в переменную записывается ссылка на обьект, а не сам обьект
let a = [1, 2, 3]
let b = a
b.push(4)

console.log('a: ', a)
console.log('b: ', b)

// как избежать?
// let a = [1, 2, 3]
// let b = a.concat() // без параметров возвращает копию
// b.push(4)

// console.log('a: ', a)
// console.log('b: ', b)