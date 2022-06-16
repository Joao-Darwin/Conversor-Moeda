let valorReal = window.document.getElementById("valorReal")
let tipoMoedas = window.document.getElementById("tiposMoedas")
let msg = window.document.getElementById("msg")
let msg2 = window.document.getElementById("msg2")
let msg3 = window.document.getElementById("msg3")

function carregar() {
    if (valorReal.value < 0) {
        msg.innerHTML = `Erro`
    } else if (tipoMoedas.value == "Dólar/USD") {
        msg.innerHTML = `$ ${(valorReal.value * 0.2093).toFixed(2).replace(".", ",")}`
        msg2.innerHTML = `R$ ${(valorReal.value * 1).toFixed(2).replace(".", ",")}`
        msg3.innerHTML = `${tipoMoedas.value}`
    } else if (tipoMoedas.value == "Dólar/CAD") {
        msg.innerHTML = `C$ ${(valorReal.value * 0.2619).toFixed(2).replace(".", ",")}`
        msg2.innerHTML = `R$ ${(valorReal.value * 1).toFixed(2).replace(".", ",")}`
        msg3.innerHTML = `${tipoMoedas.value}`
    } else if (tipoMoedas.value == "Euro/EUR") {
        msg.innerHTML = `€ ${(valorReal.value * 0.1906).toFixed(2).replace(".", ",")}`
        msg2.innerHTML = `R$ ${(valorReal.value * 1).toFixed(2).replace(".", ",")}`
        msg3.innerHTML = `${tipoMoedas.value}`
    }
}