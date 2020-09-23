// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// }

class Animal {

  static type = 'ANIMAL'

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() {
    console.log('I am animal');
  }
}

// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// })

// console.log('animal: ', animal)

class Cat extends Animal{
  static type = 'CAT'
  constructor(options) {
    super(options)
    this.color = options.color
  }

  voice() {
    super.voice()
    console.log('I am cat')
  }

  get ageInfo() {
    return this.age * 7
  }

  set ageInfo(newAge) {
    this.age = newAge
  }
}

const cat = new Cat({
  name: 'Animal',
  age: 5,
  hasTail: true,
  color: 'black'
})

console.log('cat: ', cat)
console.log(cat.voice())
console.log(cat.ageInfo);
