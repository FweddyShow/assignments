function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie", "brownie"],
             ["carrot", 'beet']))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    // }

    function parseSentence({location, duration}){
        return `We're going to have a good time in ${location} for ${duration}`
      }
      
      console.log(parseSentence({
        location: "Burly Idaho",
        duration: "2 weeks"
      }));

      items = [1, 2 ,3]
      function returnFirst(items){
        let [first, second] = items /*change this line to be es6*/
        return first
    }
    console.log(returnFirst(items))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    [firstFav, secondFav, thirdFav] = arr
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities))

function combineAnimals() {
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function product(...num) {
    return num.reduce((acc, number) => {
      return acc * number;
    }, 1)
  }
  console.log(product(1, 2, 3, 4))

function unshift(array, ...second) {
  return [...second, ...array]
}

array = ["tim", "squeeb", "amogus"]
second = "something"
console.log(unshift(array, second))

function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        [firstName, lastName] = name
        return {
            firstName,
            lastName
        }})}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

