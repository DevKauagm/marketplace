const produtos = {
    eletrodom: {geladeira: [{nome: 'Geladeira Electrolux Frost Free Duplex 310 Litros', pr: 1.403, imgs: ['imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-1.jpg', 'imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-2.jpg', 'imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-3.png', 'imagens/eletrodomestico/geladeira/Geladeira_Electrolux_Frost_Free_Duplex_310Litros-4.jpg']}, {}], tv: [{}]}
}

const section_eletro = document.querySelectorAll('#eletrodomesticos > a')
const img = document.createElement('img')

for (const geladeira of produtos.eletrodom.geladeira) {
    img.setAttribute('src', geladeira.imgs[0])
    section_eletro[0].appendChild(img)
    img.addEventListener('click', () => {localStorage.setItem('info', JSON.stringify(geladeira))})
}