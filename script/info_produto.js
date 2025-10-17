const info = JSON.parse(localStorage.getItem('info'))
const imgs = document.querySelectorAll('section > img')
const h1 = document.querySelector('section > h1')
const h2 = document.querySelector('section > h2')

function img_principal(img) {
    for (const imagem of imgs) {
        imagem.removeAttribute('id')
    }
    img.setAttribute('id', 'principal')
}

for (let i = 0; i <= 3; i++) {
    imgs[i].src = `../${info.imgs[i]}`
    imgs[i].addEventListener('click', () => img_principal(imgs[i]))
    h1.innerText = info.nome
    h2.innerText = `R$${info.pr}`
}