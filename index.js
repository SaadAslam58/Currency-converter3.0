const currency = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.78,
    JPY: 110.84,
    AUD: 1.38,
    CAD: 1.33,
    CHF: 0.90,
    NZD: 1.39,
    INR: 75.03,
    SGD: 1.36,
    HKD: 7.78,
    MYR: 4.25,
    THB: 32.60,
    ZAR: 13.98,
    BRL: 4.29,
    CNY: 6.96,
    KRW: 1175.00,
    VND: 23000.00,
    PKR: 280    
}

document.querySelector('#converter-form').addEventListener('submit', (evt) =>{
evt.preventDefault();

let fromCurrency = document.querySelector('#from').value
let toCurrency = document.querySelector('#to').value
let amount = document.querySelector('#amount').value

let fromAmount = currency[fromCurrency]
let toAmount = currency[toCurrency]
let baseAmount = amount / fromAmount
let convertAmount = baseAmount * toAmount

document.querySelector('#result').textContent = `Converted Amount:${Math.round(convertAmount)}`

});