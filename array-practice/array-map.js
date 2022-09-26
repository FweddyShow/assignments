//variables
const numbers = [2, 5, 100]
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const namesList = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]


//doubleup

const result = numbers.map(function doubleNumbers(arr){
    return arr * 2
  })
  
  console.log(result); // [4, 10, 200]
  

  //string it

  const string = numbers.map(function stringItUp(arr){
    return arr.toString()
})
 
console.log(string)

//capitalize

const capital = names.map(function(arr){
    return arr.charAt(0).toUpperCase() + arr.slice(1).toLocaleLowerCase()
})

console.log(capital)

//names array

const namesSelector = namesList.map(function namesOnly(arr){
    return arr.name
  });
  console.log(namesSelector)
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


  //matrix

  const matrix = namesList.map(function makeStrings(arr){
    if(arr.age > 18){
        return arr.name + " can go to the Matrix"
    }else(arr.age < 18)
        return arr.name + " is under age!"
  })
  console.log(matrix)
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]


  //html assigner

  const dom = namesList.map(function readyToPutInTheDOM(arr){
        return "<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "</h2>"
    })
console.log(dom)