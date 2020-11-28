const fromCurrency = document.getElementById("from_currency");
const fromAmountEl = document.getElementById("from_amount");
const toCurrencyEl = document.getElementById("to_currency");
const toAmountEl = document.getElementById("to_amount");
const rateEl = document.getElementById("rate");

fromCurrency.addEventListener('change', calculate)
fromAmountEl.addEventListener('input', calculate)
toCurrencyEl.addEventListener('change', calculate)

function calculate() {
    const from_currency = fromCurrency.value;
    const to_currency = toCurrencyEl.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[to_currency];
            rateEl.innerText = `${from_currency} = ${Math.round(rate).toLocaleString('en-US')} ${to_currency}`;
            const value = (fromAmountEl.value * Math.round(rate));
            toAmountEl.value = 'Rp.'+ value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        })
}

calculate();