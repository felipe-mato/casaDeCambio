import  fetchFunc from "./utils/utils";

const searchBtn = document.querySelector(".search-btn")
const boardContent = document.querySelector(".board-content")
const title = document.querySelector(".title")
const currencySelect = document.querySelector(".currency-select")


const currencyArray = [
  "AED", "UAE", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF",
  "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP",
  "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
  "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK",
  "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD",
  "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD",
  "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB",
  "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS",
  "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST",
  "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
]

currencyArray.forEach(currency => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  currencySelect.appendChild(option);
});

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = currencySelect.value;
  fetchFunc(inputValue)
    .then((results) => {
      // Converta o objeto results em um array de pares key/value
      const entries = Object.entries(results);

      // Agora você pode usar o método map() no array entries
      const cards = entries.map(([key, value]) => {
        return `
          <div class="card">
            ${key} ${value}
          </div>
        `;
      });

      title.innerHTML = `Valores referentes a 1 ${inputValue}`
      boardContent.innerHTML = cards.join('');
    });
});