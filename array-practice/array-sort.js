//variable 

const numbers = [1, 3, 5, 2, 90, 20]
const string = ["dog", "wolf", "by", "family", "eaten"]
const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

//small to large

numbers.sort((a, b) => a - b)
console.log(numbers)

//large to small 

numbers.sort((a,b) => b - a)
console.log(numbers)

//string length

string.sort((a,b) => a.length - b.length)
console.log(string)

//alphabetically

string.sort()
console.log(string)

//age

age.sort((a,b) => a.age - b.age)
console.log(age)