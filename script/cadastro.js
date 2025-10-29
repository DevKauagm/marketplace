const inputs = document.querySelectorAll('section input')
const regex = [/^\w{1,8}$/, /^\w+[@][a-z]+[.][a-z]+$/]

function verificar() {
    for (let i in inputs) {
        console.log(regex[i])
        if (regex[i].test(inputs[i].value)) {
            inputs[i].style.backgroundColor = 'green' 
        } else {
            inputs[i].style.backgroundColor = 'red'
        }
    }
}

function cadastrar() {
    verificar()
}

document.querySelector('section > input').addEventListener('click', cadastrar)