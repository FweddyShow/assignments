const todo = document.getElementById("todo")
get()
//get data
function get (){
axios.get("https://api.vschool.io/freddy/todo")
    .then(res => {
        console.log(res)
        for(let i = 0; i < res.data.length; i++){
            let data = (res.data[i])
            
            createTodo(data)
        }    
})

//post todo

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const newTodo = {
        title: todoForm['todo-form-title'].value,
        description: todoForm['todo-form-des'].value,
        price: todoForm['todo-form-price'].value,
        imgUrl: todoForm['todo-form-img'].value
    }
    axios.post("https://api.vschool.io/freddy/todo", newTodo)
    .then(res => {
        createTodo(res.data)
    }).catch(error => console.log(error)) 
})



 // adding to the dom 
 function createTodo(data) {
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const des = document.createElement('p')
    const price = document.createElement('h2')
    const img = document.createElement('img')
    const deleteBut = document.createElement('button')
    const checkBox = document.createElement('input')
    checkBox.setAttribute("type", "checkbox")

    title.textContent = data.title
    des.textContent = data.description
    price.textContent = data.price
    img.src = data.imgUrl
    deleteBut.textContent = "Delete"

    document.body.append(div)
    document.body.appendChild(title)
    document.body.appendChild(des)
    document.body.appendChild(price)
    document.body.appendChild(img)
    document.body.appendChild(deleteBut)
    document.body.appendChild(checkBox)

    img.height = 100
    img.width = 100


    if(data.completed){
        title.style.textDecoration = "line-through"
        des.style.textDecoration = "line-through"
        price.style.textDecoration = "line-through"
        checkBox.checked = true
    }
    //put
    const completedTrue = {
    completed: "true"
    }
    const completedFalse = {
    completed: "false"
    }
       checkBox.addEventListener('change', (event) =>{
        event.preventDefault()
        if (event.target.checked){
            axios.put("https://api.vschool.io/freddy/todo/"+data._id, completedTrue)
            .catch(error => console.log(error))

            title.style.textDecoration = "line-through"
            des.style.textDecoration = "line-through"
            price.style.textDecoration = "line-through"
            checkBox.checked = true
        }else {
            axios.put("https://api.vschool.io/freddy/todo/"+data._id, completedFalse)
            .catch(error => console.log(error))

            title.style.textDecoration = "none"
            des.style.textDecoration = "none"
            price.style.textDecoration = "none"
            checkBox.checked = false
        }
       })
    //delete

    deleteBut.addEventListener('click', (event) =>{
        event.preventDefault()
        axios.delete("https://api.vschool.io/freddy/todo/"+data._id)
        .then(res => {
            console.log(res)
                clearList()
                get()
        }).catch(error => console.log(error))
    })
}}   


function clearList(){
    const el = document.getElementById("todoList")
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}