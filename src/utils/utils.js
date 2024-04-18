const fetchFunc = (currency) => {
  const URL = `https://v6.exchangerate-api.com/v6/6ffb9cd095fe25866bf4df00/latest/${currency}`;
  return fetch(URL)
    .then((result) => result.json())
    .then((data) => {
      // Remove o primeiro elemento do array
      const rates = Object.entries(data.conversion_rates).slice(1);

      // Converte o array de volta para um objeto
      const response = Object.fromEntries(rates);

      return response;
    });
};

export default fetchFunc;
