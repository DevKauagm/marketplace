const produtos = {
    eletrodom: {geladeira: [{nome: 'Geladeira Electrolux Frost Free Duplex 310 Litros', pr: 1.403, imgs: ['imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-1.jpg']}, {}], tv: [{}]}
}

const section_eletro = document.querySelectorAll('#eletrodomesticos > section')

for (let i in produtos.eletrodom.geladeira) {
    const img = document.createElement('img')
    img.setAttribute('src', produtos.eletrodom.geladeira[i].imgs[0])
    console.log(produtos.eletrodom.geladeira[i].imgs[0])
    section_eletro[0].appendChild(img)
}