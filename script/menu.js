const p_menu = document.querySelector('header > p')
p_menu.addEventListener('click', menu)
let ativo = false

function menu() {
    p_menu.style.transform = 'translatey(10px)'
    const a_menu = document.querySelectorAll('header > p > a')
    if (!ativo) {
        p_menu.style.transform = 'translatey(10px)'
        a_menu.forEach((a) => {a.style.display = 'block'})
        ativo = true
    } else {
        p_menu.style.transform = ''
        a_menu.forEach((a) => {a.style.display = 'none'})
        ativo = false
    }
}