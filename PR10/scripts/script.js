//ex.1
const checker = document.querySelector(".captcha")
const checkbox = document.querySelector("#check")
const buttons = document.querySelectorAll(".login_btn")
var captcha_text, a, b, second_try = false
checker.addEventListener("click",captcha)

function captcha_generator() {
    var res = ""
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (var i = 0; i < 5; i++)
        res += str.charAt(Math.floor(Math.random() * str.length))

    return res
}

function check() {
    captcha_input = captcha_window.querySelector(".captcha_input")
    if (!second_try) {
        if (captcha_input.value == captcha_text.innerHTML) {
            captcha_window.style.transform = "scale(0)"
            checkbox.checked = true
            buttons.forEach(x => x.removeAttribute("disabled"))
            checker.removeEventListener("click",captcha)
        }
        else {
            captcha_input.value = ""
            a = Math.floor(Math.random() * 100)
            b = Math.floor(Math.random() * 100)
            captcha_text.innerHTML = a + " + " + b
            second_try = true
        }
    }
    else {
        if (captcha_input.value == `${a + b}`) {
            captcha_window.style.transform = "scale(0)"
            checkbox.checked = true
            buttons.forEach(x => x.removeAttribute("disabled"))
            checker.removeEventListener("click",captcha)
        }
        else {
            captcha_input.value = ""
            alert('U stupid as hell bro')
            captcha_window.style.transform = "scale(0)"
            checker.removeEventListener("click",captcha)
        }
    }
}

function captcha() {
    captcha_window = document.querySelector(".captcha_window")
    captcha_window.style.transform = "scale(1)"
    captcha_text = captcha_window.querySelector("#captcha_text")
    captcha_text.innerHTML = captcha_generator()
    const submit_btn = captcha_window.querySelector(".submit_captcha")
    submit_btn.addEventListener("click",check)
}

//ex.2
function accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        newValue = prompt("Input a value to be added:")
        if (newValue == Number(newValue))
            this.value += Number(newValue)
        else
            alert("Nan Entered")
    }
}
accu = new accumulator(20)
const accumulator_val = document.querySelector("#value")
accumulator_val.textContent = accu.value
const add_btn = document.querySelector(".add_btn")
add_btn.onclick = function() {
    accu.read()
    accumulator_val.textContent = accu.value
}


//ex.3
function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0,maxlength-3) + "..."
    return str
}

str = document.querySelector(".card span")
str.textContent = truncate(str.textContent,20)
