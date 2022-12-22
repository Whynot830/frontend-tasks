//ex.3 
var flag = true

const notifContainer = document.querySelector('.notif_container')
var notif
var closeBtn
showNotification = function () {
    notif = document.createElement('div')
    notif.textContent = 'Notification text'
    notif.classList.add('notification')

    closeBtn = document.createElement('button')
    closeBtn.textContent = 'x'
    closeBtn.classList.add('closeBtn')

    notif.append(closeBtn)
    notifContainer.append(notif)

    if (!flag) {
        setTimeout(() => { notif.style.opacity = '0' }, 1500)
        setTimeout(() => { notif.remove() }, 2000)
    }
}
if (flag) {
    timer = setInterval(() => { showNotification() }, 1000)
    setTimeout(() => { clearInterval(timer) }, 5000)
    notifContainer.addEventListener('click', (event) => {
        btn = event.target.closest('button')
        if (!btn) return
        // btn.parentNode.remove()
        btn.parentNode.style.opacity = 0
        setTimeout(() => (btn.parentNode.remove()), 500)
    })
}
else {
    showNotification()
}

//ex.4
const x = document.querySelector('#offX')
const y = document.querySelector('#offY')

showClickCoords = function (event) {
    x.textContent = event.clientX
    y.textContent = event.clientY
}
window.addEventListener('click', showClickCoords)

const container = document.querySelector('.container_2')
const image = document.querySelector('.js-centered-image')


container.style.position = 'absolute'
container.style.left = Math.round(window.innerWidth / 2 - container.clientWidth / 2) + 'px'
container.style.top = Math.round(window.innerHeight / 2 - container.clientHeight / 2) + 'px'


image.style.position = 'absolute'
image.style.left = Math.round(container.clientWidth / 2 - image.clientWidth / 2) + 'px'
image.style.top = Math.round(container.clientHeight / 2 - image.clientHeight / 2) + 'px'