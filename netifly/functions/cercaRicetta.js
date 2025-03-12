const axios = require('axios');

exports.handler = async function (event) {
  // Estrai il parametro 'inputRicetta' dal corpo della richiesta
  const { inputRicetta } = JSON.parse(event.body);

  // Usa la variabile di ambiente per ottenere la chiave API in modo sicuro
  const apiKey = process.env.VITE_API_KEY; // Usa process.env per accedere alla chiave API

  // Costruisci l'URL della richiesta all'API di Spoonacular
  const url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${inputRicetta}&apiKey=${apiKey}`;

  try {
    // Esegui la richiesta HTTP usando axios
    const response = await axios.get(url);

    // Restituisci la risposta dell'API con status 200 (successo)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // Se c'è un errore, restituisci un errore con status 500
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Errore nella richiesta delle ricette', error: error.message }),
    };
  }
};
