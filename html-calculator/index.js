const addForm = document.addForm
const sub = document.subtractForm
const times = document.multiplyForm


//submit addition
addForm.addEventListener("submit", function(event){
    event.preventDefault()
   // console.log("prevent default works")
var num1 = addForm.addOne.value;
var num2 = addForm.addTwo.value;
var addTotal = parseInt(num1) + parseInt(num2);
addForm.addOne.value = ""
addForm.addTwo.value = ""
document.getElementById("totalAdd").textContent = addTotal
//console.log(num1, num2, totalAdd, resultAdd)
})

//subtraction
subForm.addEventListener("submit", function(event){
    event.preventDefault()
    //console.log("prevent default works")
var num3 = subForm.subOne.value;
var num4 = subForm.subTwo.value;
var subTotal = parseInt(num3) - parseInt(num4);
subForm.subOne.value = ""
subForm.subTwo.value = ""
document.getElementById("totalSub").textContent = subTotal
//console.log(num1, num2, totalAdd, resultAdd)
})

//multiply
multForm.addEventListener("submit", function(event){
    event.preventDefault()
    //console.log("prevent default works")
var num5 = multForm.multOne.value;
var num6 = multForm.multTwo.value;
var multTotal = parseInt(num5) * parseInt(num6);
multForm.multOne.value = ""
multForm.multTwo.value = ""
document.getElementById("totalMult").textContent = multTotal
//console.log(num1, num2, totalAdd, resultAdd)
})