document.getElementById("square").addEventListener("mouseenter", function() {
    document.getElementById("square").style.backgroundColor = "blue"
    console.log("moused");
})

document.getElementById("square").addEventListener("mouseout", function() {
    document.getElementById("square").style.backgroundColor = "gray"
    console.log("exit");
})

document.getElementById("square").addEventListener("mousedown", function() {
    document.getElementById("square").style.backgroundColor = "red"
    console.log("held");
})

document.getElementById("square").addEventListener("mouseup", function() {
    document.getElementById("square").style.backgroundColor = "yellow"
    console.log("release");
})

document.getElementById("square").addEventListener("dblclick", function() {
    document.getElementById("square").style.backgroundColor = "green"
    console.log("2x");
})

document.body.addEventListener("wheel", function() {
    document.getElementById("square").style.backgroundColor = "orange"
    console.log("scroll");
})
