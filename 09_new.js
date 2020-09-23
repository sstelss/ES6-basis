function Cat(color, name) {
  this.color = color
  this.name = name
}

// const cat = new Cat('black', 'КОТ')
// console.log(cat)


// своя реализация new
// function myNew(constructor, ...args) {
//   const obj = {}
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'KOT')
// console.log(cat)


const cat = Cat()
console.log(cat)

const cat1 = new Cat()
console.log(cat1)