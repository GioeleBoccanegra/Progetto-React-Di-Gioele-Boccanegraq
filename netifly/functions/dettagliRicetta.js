const axios = require('axios');

exports.handler = async function (event) {
  const { ricettaId } = JSON.parse(event.body);

  // Usa la variabile di ambiente per ottenere la chiave API in modo sicuro
  const apiKey = process.env.VITE_API_KEY;

  const url = `https://api.spoonacular.com/recipes/${ricettaId}/information?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);

    // Restituisci la risposta dell'API con status 200 (successo)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Errore nella richiesta della ricetta', error: error.message }),
    };
  }
};
