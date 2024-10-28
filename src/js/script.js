const openMenu = document.getElementById('mobo-menu-open')
const closeMenu = document.getElementById('mobo-menu-close')
const menu = document.getElementById('mobo-menu')

openMenu.addEventListener('click', () => {
  menu.classList.remove('hidden')
})
closeMenu.addEventListener('click', () => {
  menu.classList.add('hidden')
})