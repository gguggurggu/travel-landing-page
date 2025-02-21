export function exchangeRate() {
  const apiKey = "a6f8246e4f8086ce96d4448a";
  const currencyOne = document.getElementById("currency-one");
  const amountOne = document.getElementById("amount-one");
  const amountTwo = document.getElementById("amount-two");
  const rateText = document.getElementById("rate");

  let rates = {};

  const getExchangeRates = async () => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      rates = data.conversion_rates;
      populateCurrencies();
      calculate("amount-one");
    } catch (error) {
      console.error("환율 데이터를 가져오는 중 오류 발생:", error);
      alert("환율 데이터를 불러올 수 없습니다.");
    }
  };

  const populateCurrencies = () => {
    currencyOne.innerHTML = "";
    for (const currency in rates) {
      const option = document.createElement("option");
      option.value = currency;
      option.innerText = currency;
      currencyOne.appendChild(option);
    }
    currencyOne.value = "KRW";
  };

  const calculate = (changedInput) => {
    const fromCurrency = currencyOne.value;
    const fromRate = rates[fromCurrency];
    const toRate = rates["SEK"];

    if (fromRate && toRate) {
      const rate = toRate / fromRate;
      rateText.innerText = `1 ${fromCurrency} = ${rate.toFixed(3)} SEK`;

      if (changedInput === "amount-one") {
        const amount = parseFloat(amountOne.value) || 0;
        amountTwo.value = (amount * rate).toFixed(2);
      } else {
        const amount = parseFloat(amountTwo.value) || 0;
        amountOne.value = (amount / rate).toFixed(2);
      }
    }
  };

  currencyOne.addEventListener("change", () => calculate("amount-one"));
  amountOne.addEventListener("input", () => calculate("amount-one"));
  amountTwo.addEventListener("input", () => calculate("amount-two"));

  getExchangeRates();
}
