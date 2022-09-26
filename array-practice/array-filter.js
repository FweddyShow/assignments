//variables
const numbers = [3, 6, 8, 2]
const obj = ["dog","wolf", "by", "family", "eaten", "camping"]
const names = [{ name: "Angelina Jolie", member: true, age: 80 },
{ name: "Eric Jones", member: false, age: 2 },
{ name: "Paris Hilton", member: true, age: 5 },
{ name: "Kayne West", member: false, age: 16},
{ name: "Bob Ziroll", member: true, age: 100 }]

//less than 5

const belowFive = numbers.filter( numbers => numbers < 5)
console.log(belowFive)

//even only

const even = numbers.filter( numbers => numbers %2 === 0)
console.log(even)

//5 characters or less

const lessFive = obj.filter( obj => obj.length <= 5)
console.log(lessFive)

//club member

const member = names.filter (names => names.member === true)
console.log(member)

//age

const age = names.filter (names => names.age >= 18)
console.log(age)