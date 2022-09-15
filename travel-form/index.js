const form = document.travel


form.addEventListener("submit", function(event){
    event.preventDefault()
    const first = form.firstName.value
    const last = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value
    const diet = []
    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }
    //console.log(first,last,age,gender,location,diet)
    alert("First Name: " + first + "\n" +
     "Last Name: " + last + "\n" +
     "Age: " + age + "\n" +
     "Gender: " + gender + "\n" +
     "Destination: " + location + "\n" +
     "Dietary Requirements: " + diet)
})