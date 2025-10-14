const produtos = {
    eletrodom: {geladeira: [{nome: 'Geladeira Electrolux Frost Free Duplex 310 Litros', pr: 1.403, imgs: ['imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-1.jpg', 'imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-2.jpg', 'imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-3.png', 'imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-4.jpg']}, {}], tv: [{}]}
}

const section_eletro = document.querySelectorAll('#eletrodomesticos > section')

const img = document.querySelectorAll('main > img')

function info(nome, pr, imgs) {
    document.querySelector('main').style.display = 'none'
    document.body.style.backgroundColor = 'white'
    document.querySelector('#pgproduto').style.display = 'grid'
    for (let i = 0; i <= 3; i++) {
        img[i].src = imgs[i]
    }
    document.querySelector('#pgproduto > h1').innerText = nome
    document.querySelector('#pgproduto > h2').innerText = `R$ ${pr}`
}

for (const geladeira of produtos.eletrodom.geladeira) {
    const img = document.createElement('img')
    img.setAttribute('src', geladeira.imgs[0])
    section_eletro[0].appendChild(img)
    img.addEventListener('click', () => info(geladeira.nome, geladeira.pr, geladeira.imgs))
}