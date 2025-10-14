const info = JSON.parse(localStorage.getItem('info'))
const img = document.querySelectorAll('section > img')
const h1 = document.querySelector('section > h1')
const h2 = document.querySelector('section > h2')

for (let i = 0; i <= 3; i++) {
    img[i].src = info.imgs[i]
    img[i].addEventListener('click')
    h1.innerText = info.nome
    h2.innerText = `R$${info.pr}`
}