//calculoo de imc peso/(altura*altura)
function calcula_imc(peso, altura) {
    altura = altura / 100
    return peso / (altura * altura)
}

function pegar_dados_formulario (event) {
    event.preventDefault()
    const altura = Number (document.getElementById('altura').value)

    const peso = Number (document.getElementById('peso').value)

    const imc = calcula_imc(peso, altura)
    document.getElementById('resultado').innerHTML = imc
}
    