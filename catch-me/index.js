//part 1
const x = '1'
const y = '2'
try {
const sum = x + y
if (typeof sum !== "number"){
    throw "not a number"
} 
console.log(sum)
console.log(typeof sum)

}
catch(err) {
    console.log(err)
}

//part 2

const user = {
    username: 'sam',
    password: '1234'
}
const login = function(entry1, entry2){
    if(entry1 !== user.username){
        throw new Error('This login does not match our records')
    }
    if(entry2 !== user.password){
        throw new Error('This login does not match our records')
    }else{console.log("Login success welcome!")}
}

try{
    login("sam", "1234")
}
catch(err){
    console.log(err)
}

try{
    login("sam", "abcd")
}
catch(err){
    console.log(err)
}