//ex1
contents.onclick = (event) => {
    link = event.target.closest('a')
    if (link) {
        confirmation = confirm('Перейти по внешней ссылке (' + link + ') ?')
        if (!confirmation)
            event.preventDefault()
    }
}

//ex2
pictures.onclick = (event) => {
    if (event.target.closest('img'));
    picked.src = event.target.closest('img').src
}

//ex3
ul.onclick = (event) => {
    li = event.target.closest('li')
    if (li) {
        if (event.ctrlKey)
            li.classList.toggle('selected')
        else {
            toRemoveSelection = ul.querySelectorAll('li')
            if (toRemoveSelection.length === 0 ||
                toRemoveSelection.length === 1 && toRemoveSelection[0] === li)
                li.classList.toggle('selected')
            else
                toRemoveSelection.forEach(element => (element !== li) ? element.classList.remove('selected') : element.classList.add('selected'))
        }
    }
    else {
        ul.querySelectorAll('li').forEach(element => element.classList.remove('selected'))
    }

}
ul.onmousedown = event => event.preventDefault()

//ex4
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function (event) {
    event.preventDefault()

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newX = event.clientX - shiftX - slider.getBoundingClientRect().left;
        rightBound = slider.clientWidth - thumb.clientWidth

        if (newX < 0) newX = 0
        if (newX > rightBound)
            newX = rightBound

        thumb.style.left = newX + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};


//ex5
cart.onmousedown = event => event.preventDefault()
cart.addEventListener('mouseover', function (event) {
    let target = event.target.closest('.item')
    if (target) {
    target.onmousedown = function (event) {
        let shiftX = 9 + event.clientX - target.getBoundingClientRect().left;
        let shifTY = 9 + event.clientY - target.getBoundingClientRect().top;

        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.append(target);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            target.style.left = pageX - shiftX + 'px'
            target.style.top = pageY - shifTY + 'px'
        }

        function leaveDrop(elemDrop) {
            elemDrop.style.filter = 'brightness(1)'
        }

        function enterDrop(elemDrop) {
            elemDrop.style.filter = 'brightness(1.1)'
        }

        let curDroppable = null
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)

            target.hidden = true
            let elBelow = document.elementFromPoint(event.clientX, event.clientY)
            target.hidden = false

            if (!elBelow) return

            let dropBelow = elBelow.closest('.droppable')
            if (curDroppable != dropBelow) {
                if (curDroppable) {
                    leaveDrop(curDroppable)
                }
                curDroppable = dropBelow
                if (curDroppable) {
                    enterDrop(curDroppable)
                }
            }
        }


        document.addEventListener('mousemove', onMouseMove)

        target.onmouseup = function (event) {
            target.hidden = true
            let below = document.elementFromPoint(event.clientX, event.clientY)
            target.hidden = false
            if (below) {
                let d = below.closest('.droppable')
                if (d) {
                    d.textContent = Number(d.textContent) + Number(target.textContent)
                    document.body.removeChild(target)
                    d.style.filter = 'brightness(1)'
                }
            }
            document.removeEventListener('mousemove', onMouseMove)
        }
    }

    target.ondragstart = event => event.preventDefault()
    
}
})

//ex6

const bKeyframes = new KeyframeEffect(
    ball,
    [
        { backgroundColor: "black" },
    ],
    { duration: 2000, fill: 'forwards', iterations: Infinity, direction: "alternate" }
);


const bAnimation = new Animation(bKeyframes, document.timeline);

function Move() {
    pos = 20
    velocity = 1
    
    bAnimation.play()
    setInterval(function() {
        if (pos >= 440 || pos < 20) {
            velocity = -1 * velocity
        }
        pos += velocity
        ball.style.left = pos + 'px'
    }, 2)

}
Move()
