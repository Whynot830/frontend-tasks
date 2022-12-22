let str = prompt("Would you like to register?")

if (str == "yes") {
    alert('Cool!')
    str = prompt("Login: ")
    if (!str)
        alert("Canceled")
    else if (str == "Admin") {
        str = prompt("Password: ")
        if (!str) 
            alert("Canceled")
        else if (str == "I'm in charge")
            alert('Welcome back, Admin')
        else
            alert('Incorrect password')
    }
    else
        alert('I don`t know you')
}
else {
    alert('Try again')
}

const btn = document.querySelector("#btn");

btn.onclick = function () {
    count = document.querySelector("#text")
    if (window.getComputedStyle(btn).backgroundColor == "rgb(255, 255, 255)") {
        btn.style.setProperty("--bg", "lightcoral");
        count.innerHTML = 1
        document.body.addEventListener('mousemove', draw);
    }
    else {
        btn.style.setProperty("--bg", "white");
        count.innerHTML = 0
        document.body.removeEventListener('mousemove', draw);
        document.querySelectorAll("#drawable_imgs").forEach(el => el.remove())
    }

};

btn.onmousemove = function (event) {
    document.querySelector('#offx').innerHTML = event.offsetX
    document.querySelector('#offy').innerHTML = event.offsetY
}

function draw(event) {
    newElement = document.createElement("div")
    newElement.innerHTML = '<img src="svgs/heart.svg" id="drawable_imgs">'
    newElement.style.position = "absolute"
    newElement.style.zIndex = "-1"
    newElement.style.top = event.clientY + "px"
    newElement.style.left = event.clientX + "px"
    document.body.appendChild(newElement)
}
