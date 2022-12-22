const bucket = document.querySelector('.bucket')
const delete_btn = document.querySelector('#delete')
const sort_btn = document.querySelector('#sort')
const filter_btn = document.querySelector('#filter')
const swap_btn = document.querySelector('#swap')
let newElement
let elements
let items = [0, 4, 2, 9, 7, 8, 3, 1, 5, 6]

function fill() {
    for (let i = 0; i < items.length; i++) {
        newElement = document.createElement("div")
        newElement.classList.add('bucket_item')
        newElement.textContent = items[i]
        bucket.appendChild(newElement)
    }
}
fill()

delete_btn.addEventListener('click', del)
function del() {
    if (items.length > 0) {
        items.shift();
        elements = bucket.querySelectorAll('div')
        bucket.removeChild(elements[0])
    }

}

sort_btn.addEventListener('click', sort)
function sort() {
    if (items.length > 0) {
        items.sort();
        elements = bucket.querySelectorAll('div')
        elements.forEach(el => el.remove())
        fill()
    }
}

swap_btn.addEventListener('click', swap)
function swap() {
    if (items.length > 1) {
        elements = bucket.querySelectorAll('div')
        let temp = elements[0].textContent
        elements[0].textContent = elements[elements.length - 1].textContent
        elements[elements.length - 1].textContent = temp

        temp = items[0]
        items[0] = items[items.length - 1]
        items[items.length - 1] = temp
        items[0], items[items.length - 1] = items[items.length - 1], items[0]

    }
}

let a, b
filter_btn.addEventListener('click', filter)
function fitsRange(num) {
    return num > a && num < b
}
function filter() {
    a = prompt('Items more than:')
    b = prompt('Items less than:')
    items = items.filter(fitsRange)
    elements = bucket.querySelectorAll('div')
    elements.forEach(el => el.remove())
    fill()
}


notifCircle = document.querySelector('.notif_count_badge')
notifCount = notifCircle.querySelector('span')

function notifCountIncrease() {
    notifCount.textContent++;
}
let timer = setInterval(notifCountIncrease, 3000)

function delayIncreasing() {
    clearInterval(timer)
    setTimeout(() => { timer = setInterval(notifCountIncrease, 3000) }, 10000)
}

notifCircle = addEventListener('click', delayIncreasing)

