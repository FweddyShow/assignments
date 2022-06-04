const h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!!";
h1.className = "header";
document.getElementById("header").appendChild(h1);

const h2 = document.createElement("subTitle")
h2.innerHTML = '<span class="name">Freddy</span> wrote the JavaScript';
h2.className = "subtitle";
h2.setAttribute = "center";
document.getElementById("header").appendChild(h2);

const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're great";
messages[1].textContent = "thanks gamer";
messages[2].textContent = "no problem gamer";
messages[3].textContent = "poggers";

const clicked = document.getElementById('clear-button');
clicked.addEventListener('click', function() {;
    for(let i = 0; i < messages.length; i++) {;
        messages[i].textContent = "";
    }});