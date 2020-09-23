// null, undefined, number, bollean, string, object, symbol

console.log(typeof 8)
console.log(typeof true)
console.log(typeof 'hey') // "", '', ``
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof Symbol(8))

// undefined присваивается неопределенным переменным или функции возвращают по умолчаниюю
// а null присваивает уже пользователь, то есть мы показываем что там пусто, но значение определенно



// ПРиведение типов
let language = 'JS'
if (language) {
  console.log(1 + '1')
}

// '', 0, null, undefined, NaN, false - значения которые приводятся к false
// остальные всегда true

console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean('0'))
console.log(Boolean(0))
// НО ОСТОРОЖНО С ЭТИМИ СЛУЧАЯМИ! Кажется что сущности пустые но они вернут true
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function(){}))

console.log({} && 8)

// как работают строки и числа
console.log(1 + '2') // string 12
console.log('' + 1 + 0)

console.log('' - 1 + 0) // для строк не определен минус, поэтому считаетвсе как число
console.log('3' * '8') // number 24 логика как и в предидущем

// внимательно! Приведение начинается слева направо 
console.log(4 + 10 + 'px') // 14px
console.log('px' + 4 + 10) // px410 

console.log('42' - 40) // number 2
console.log('42px' - 2) // NaN так как не может привести 42px к числу

// null при преведении к числу дает 0
console.log(null + 2) // number 2
//но undefined нельзя привести ни к какому числу
console.log(undefined + 42) // NaN



// == vs === 
// == сравнивает с приведением типов
// === сравнивает без приведения типов
console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
// false при преведении к числу дает 0
console.log('0' == false) // true
console.log('0' == 0) // true
console.log(0 == 0)




// ======================================================
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false

console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false

console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
