// можем вызвать функцию до того как ее обьявили
// console.log(sum(2, 3))

// function sum(a,b) {
//   return a + b
// }

// console.log(sum(1, 41))


// ======
// var i
// console.log(i)
// i = 42
// console.log(i)


// интерпритатор уже знает что есть такая переменная но на данном этапе она еще не определена
// то есть произошел хостинг переменной j
// console.log(j)
// var j = 42
// console.log(j)


// let и const не подвержены хостингу!!!
// console.log(num)
// let num = 42
// console.log(num)



// Function Expression & Function Declaration

//Function Declaration с ним работает хостинг
console.log(squre(8))
function squre(num) {
  return num ** 2
}

//Function Expression с ним НЕ работает хостинг!
console.log(squre1(8))
const squre1 = function(num) {
  return num ** 2
}