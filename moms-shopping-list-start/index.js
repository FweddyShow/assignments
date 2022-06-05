const form = document.addItem


form.addEventListener("submit", function(e) {
    e.preventDefault()
    const input = form.title.value
    console.log(input)

    form.title.value = ""

    const li = document.createElement("li")
    li.textContent = input
    document.getElementById("list").appendChild(li)
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    li.appendChild(deleteButton)
    
    deleteButton.addEventListener("click", function() {

        li.remove()
        deleteButton.remove()

    })    
})



