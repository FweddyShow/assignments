//var clicks = 0

document.onclick = clickcount
   let clicks = Number(localStorage.getItem("click"))
 function clickcount() {
    clicks += 1
    document.getElementById('total').innerHTML =clicks
    localStorage.setItem("click", clicks)
}