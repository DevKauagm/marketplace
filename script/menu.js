const p_menu = document.querySelector('header > div > p')
p_menu.addEventListener('click', menu)
let ativo = false

function menu() {
    const div_menu = document.querySelector('header > div')
    const a_menu = document.querySelectorAll('header > div > a')
    if (!ativo) {
        div_menu.style.transform = 'translatey(10px)'
        a_menu.forEach((a) => {a.style.display = 'block'})
        ativo = true
    } else {
        div_menu.style.transform = ''
        a_menu.forEach((a) => {a.style.display = 'none'})
        ativo = false
    }
}