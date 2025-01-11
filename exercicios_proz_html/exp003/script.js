function calcular() {
    const horas = document.getElementById('horas').value
    const velocidade = document.getElementById('velocidade').value
    const gasto = 12
    const distancia = velocidade * horas
    const gasolina_gasta = distancia / gasto
    console.log(gasolina_gasta.toFixed(3))
}