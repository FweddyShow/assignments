//arrays

const numbers = [1, 2, 3]
const voter = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}]

    const wishlist = [{ title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }]

    var array = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ]

//total 

const total = numbers.reduce((final, number) => final += number)
console.log(total)

//string

const string = numbers.reduce(function(final,num){
   // final = final.concat(num)
   // final = final.toString()
    return final.concat(num)
}, "")
console.log(string)

//voter count


const count = voter.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)
console.log(count)

//wishlist

const costOfList = wishlist.reduce(function(final, total) {
    final += total.price
    return final
}, 0)
console.log(costOfList)


//flatten array
const flatten = array.reduce(function(final, newArray){
    return final.concat(newArray)
}, [])
console.log(flatten)

//voter ages

const age = voter.reduce(function(final, voter){
    if(voter.age >= 18 && voter.age <= 25){
        final.numYoungPeople++
    }else if(voter.age >=26 && voter.age <= 35){
        final.numMidPeople++
    }else{
        final.numOldPeople++
    }
    if(voter.age >=18 && voter.age <= 25 && voter.voted){
        final.numYoungVotes++
    }else if(voter.age >=26 && voter.age <= 35 && voter.voted){
        final.numMidVotes++
    }else if(voter.age > 35 && voter.voted){
        final.numOldVotes++
    }
    return final
}, {
    numYoungPeople: 0,
    numYoungVotes: 0,
    numMidPeople: 0,
    numMidVotes: 0,
    numOldPeople: 0,
    numOldVotes: 0,
})
console.log(age)