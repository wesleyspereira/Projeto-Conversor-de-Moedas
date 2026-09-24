const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyFrom = document.querySelector(".currency-from")
const currencyTo = document.querySelector(".currency-select")

const rates = {
    real: 1,
    dolar: 5.15,
    euro: 5.91,
    libra: 6.82,
    bitcoin: 330510.77
}

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const valueInReal = inputCurrencyValue * rates[currencyFrom.value]
    const convertedValue = valueInReal / rates[currencyTo.value]

    currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, currencyFrom.value)
    currencyValueConverted.innerHTML = formatCurrency(convertedValue, currencyTo.value)
}

function formatCurrency(value, currency) {
    if (currency == "real") {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value)
    }

    if (currency == "dolar") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value)
    }

    if (currency == "euro") {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(value)
    }

    if (currency == "libra") {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(value)
    }

    if (currency == "bitcoin") {
        return "₿ " + value.toFixed(8)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById('curency-name')
    const currencyImage = document.querySelector('.currency-img')
    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImageFrom = document.querySelector(".currency-img-from")
    // PRIMEIRA MOEDA

    if (currencyFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImageFrom.src = "./img/real.png"
    }

    if (currencyFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar"
        currencyImageFrom.src = "./img/dollar.png"
    }

    if (currencyFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./img/euro.png"
    }

    if (currencyFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./img/libra.png"
    }

    if (currencyFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImageFrom.src = "./img/bitcoin.png"
    }
    //SEGUNDA MOEDA
    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar'
        currencyImage.src = './img/dollar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './img/euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './img/libra.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './img/bitcoin.png'
    }

    if (currencySelect.value == 'real') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = './img/real.png'
    }

    convertValues()
}

currencyFrom.addEventListener("change", changeCurrency)
currencyTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
