var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

//Function

const sort = peopleArray.sort(function(a, b){
    if (a.lastName < b.lastName) {return -1}
    if (a.lastName > b.lastName) {return 1}
    return 0
})
//console.log(sort);

const list = sort.reduce(function(final, person){
    if(person.age > 18){
        final.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>")
    }
    return final
}, [])
console.log(list)