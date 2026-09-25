// Cálculo do IMC = peso / (altura * altura)

function calcula_imc(peso, altura) {
    altura = altura / 100; // converte cm para metros
    return peso / (altura * altura);
}

function pegar_dados_formulario(event) {
    event.preventDefault();

    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);

    const imc = calcula_imc(peso, altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    document.getElementById('resultado').innerHTML =
        `${imc.toFixed(2)} - ${classificacao}`;
}