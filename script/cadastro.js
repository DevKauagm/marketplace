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
    console.log(verificar())
}

document.querySelector('section > input').addEventListener('click', cadastrar)