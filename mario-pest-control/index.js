const form = document.form

//sum
form.addEventListener("submit", function(event){
    event.preventDefault()
    var num1 = form.goomba.value
    var num2 = form.bob.value
    var num3 = form.cheep.value
    var goomCoin = num1 * 5
    var bobCoin = num2 * 7
    var cheepCoin = num3 * 11
    var total = goomCoin + bobCoin + cheepCoin
    form.cheep.value = ""
    form.goomba.value = ""
    form.bob.value = ""
    console.log(num1, num2, num3, goomCoin, bobCoin, cheepCoin, total)
    document.getElementById("totalCoin").textContent = total
})
