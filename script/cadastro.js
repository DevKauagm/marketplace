const inputs = document.querySelectorAll('section > p > input')
const regex = [/^\w{1,8}$/, /^\w+[@][a-z]+[.][a-z]+$/, /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w{8,15}$/, /\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}/]

function verificar() {
    let verifica = true
    for (let i = 0; i < inputs.length; i++) {
        console.log(regex[i])
        if (regex[i].test(inputs[i].value)) {
            inputs[i].style.backgroundColor = 'green' 
        } else {
            inputs[i].style.backgroundColor = 'red'
            inputs[i].placeholder = 'Erro de Formato!'
            verifica = false
        }
    }
    setTimeout(() => {inputs.forEach(inputs => {
        inputs.style.backgroundColor = ''})}, 1000)
    return verifica
}

function cadastrar() {
    if (verificar()) {
        if (localStorage.getItem('cadastros') == null) {
            localStorage.setItem('cadastros', JSON.stringify([]))
        }
        const cadastros = JSON.parse(localStorage.getItem('cadastros'))
        const dados = {
            usuario: inputs[0].value,
            email: inputs[1].value,
            senha: inputs[2].value,
            cpf: inputs[3].value
        }
        console.log(dados)
        console.log(cadastros)
        localStorage.setItem('cadastros', JSON.stringify(cadastros.push(dados)))
        console.log(cadastros)
    }
}

document.querySelector('section > input').addEventListener('click', cadastrar)