// 1 Переменные
// camelCase - 2nd word with uppercase

// const firstName = 'Ira'
// let age = 19 //number
// const isProgrammer = true //Boolean

// const private = 'private'
// const $ = 'some value'

// const withNum5 = '5'
//const 5withNum5 = 5 //err

// 2 Мутирование
//Console.log('Name: ' + firstName + ' , age: ' + age)
//alert('Name: ' + firstName + ' , age: ' + age)

// const lastName = prompt( message: 'Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 2000

// const age = currentYear - birthYear

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// Console.log(a + b)
// Console.log(a - b)
// Console.log(a * b)
// Console.log(a / b)
// Console.log(++currentYear)
// Console.log(--currentYear)
// Console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Ira'
// const age = 19
// let x
// Console.log(typeof isProgrammer)
// Console.log(typeof name)
// Console.log(typeof age)
// Console.log(typeof x)
// Console.log(null)

// 5 Приоритет операторов
const fullAge = 19
const birthYear = 2020
const currentYear = 2020

// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge // 19 >= 20 => true
Console.log(isFullAge)