# Vegan Recipe Search App

Questa è un'applicazione React che consente agli utenti di cercare ricette vegetariane/vegane utilizzando l'API Spoonacular. Gli utenti possono cercare ricette, visualizzare gli ingredienti e le istruzioni di preparazione. Il progetto utilizza Redux per la gestione dello stato e Axios per effettuare richieste HTTP.

## Funzionalità

- **Cerca Ricette**: Inserisci una parola chiave (ad esempio, un tipo di ricetta o ingrediente) per cercare ricette vegetariane.
- **Visualizza Dettagli**: Una volta che una ricetta viene selezionata, è possibile visualizzare gli ingredienti e le istruzioni per prepararla.
- **Gestione dello Stato**: Utilizzo di Redux per gestire lo stato di ricerca e i risultati.

## Struttura del Progetto

- **`src/`**: Contiene il codice sorgente.
  - **`redux/`**: Contiene gli slice di Redux per gestire lo stato dell'app (ricette, ricerca, stato della richiesta, ecc.).
  - **`pages/`**: Contiene le pagine principali dell'app, come la ricerca di ricette e i dettagli della ricetta.
  - **`components/`**: Contiene i componenti per visualizzare gli ingredienti, la preparazione, l'elenco delle ricette, ecc.
  - **`App.js`**: Il componente principale che gestisce il routing e l'integrazione delle pagine.

## Tecnologie Utilizzate

- **React**: La libreria per costruire l'interfaccia utente.
- **Redux**: Per la gestione dello stato dell'applicazione.
- **Axios**: Per effettuare le richieste HTTP all'API Spoonacular.
- **React Router**: Per la navigazione tra le pagine.
- **Spoonacular API**: Utilizzata per recuperare informazioni su ricette vegetariane.

## Setup del Progetto

1. **Clona il repository**:
   ```
   bash
   git clone https://github.com/tuo-utente/vegan-recipe-search-app.git
    ```

2. **Installa le dipendenze**:
   ```
   cd vegan-recipe-search-app
npm install
    ```

3. **Installa le dipendenze**:
   ```
   VITE_API_KEY=la_tua_chiave_api
    ```

4. **Avvia il progetto**:
   ```
  npm run dev
    ```

    # Dettagli dell'App

## Pagina principale
La pagina principale mostra un input di ricerca dove l'utente può cercare ricette vegetariane. Una volta che l'utente inserisce una parola chiave e preme invio o clicca sul pulsante di ricerca, vengono visualizzati i risultati sotto forma di una lista di ricette.

## Pagina della ricetta
Quando l'utente seleziona una ricetta, viene reindirizzato alla pagina dei dettagli, dove può vedere gli ingredienti e le istruzioni di preparazione della ricetta.

##Autore
Questo progetto è stato sviluppato da Gioele Boccanegra.


   
