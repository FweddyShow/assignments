// for (var i = 1; i < 101; i++) {
//  if (i % 15 == 0) console.log("FizzBuzz");
//  else if (i % 3 == 0) console.log("Fizz");
//  else if (i % 5 == 0) console.log("Buzz");
//  else console.log(i);
// }


// const names = [ "Jerry", "Adam" ]
// const person = { firstName: "Robert", lastName: "Jones", age: 37 }
// names.push(person.firstName)
// console.log(names)




// Show clicks on refresh
// if (localStorage.clicks > 0) {
//     document.getElementById("clicks").innerHTML = localStorage.clicks
// }

// const num = () => {

//     localStorage.clicks = Number(localStorage.clicks) + 1
//     // Appends
//     document.getElementById("clicks").innerHTML = localStorage.clicks
//     // Sets value for refresh
//     localStorage.setItem("clicks", localStorage.clicks)
// }

// document.addEventListener("click", num)


// const people = [ "John", "Adam", "Amber" ]

// function peopleElements(arr) {
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//     newArr.push(`<h1>${arr[i]}</h1>`)
    
// }
// return newArr
// }

// console.log(peopleElements(people))

// expected output:
// [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]


const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
const arr3 = [...arr1, ...arr2]

console.log(arr3)