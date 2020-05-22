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