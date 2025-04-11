const menu = document.querySelector('ul')
const icon = document.querySelector('.icon')

icon.addEventListener('click', () => {
    menu.classList.toggle('activate')
})