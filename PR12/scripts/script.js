//ex.1
links = document.querySelectorAll('a')
links.forEach(link => {link.style.color = '#DD0000', link.style.textDecoration = 'line-through'});

//ex.2
div = document.createElement('div')
div.classList.add('centered')

ul = document.createElement('ul')

document.querySelector('.container').append(div)
div.append(ul)

var text, li
while (1) {
    text = prompt("Текст для элемента списка:","")
    if (!text) break
    li = document.createElement('li')
    li.textContent = text
    ul.append(li)
}
