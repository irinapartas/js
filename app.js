// Функции
// Function Declaration
function greet(name) {
  console.log('Привет - ', name)
}

// Function Expression
const greet2 = function greet2(name) {
  console.log('Привет 2 - ', name)
}

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// Анонимные функции
let counter = 0
const interval = setInterval(function() {
  if (counter === 5) {
    clearInterval(interval) // clearTimeout
  } else {
    console.log(++counter)
  }
}, 1000)

// 3 Стрелочные функции
function greet() {
  console.log('Привет - ')
}

const arrow = (name, age) => {
  console.log('Привет - ', name, age)
}

const arrow2 = name => console.log('Привет - ', name)

arrow2('Ira')

const pow2 = num => num ** 2

console.log(pow2(5))