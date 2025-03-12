import { configureStore } from "@reduxjs/toolkit";
import { inputRicettaReducer } from "./redux/inputRicettaSlice";
import { elencoRicetteReducer } from "./redux/elenocRicetteSlice";
import { informazioniRicettaReducer } from "./redux/informazioniRicettaSlice";
import { ricercaEffettuataReducer } from "./redux/ricercaEffettuata";
import { statoRichiestaReducer } from "./redux/statoRichiesta";
export default configureStore({
  reducer: {
    inputRicetta: inputRicettaReducer,
    elencoRicette: elencoRicetteReducer,
    informazioniRicetta: informazioniRicettaReducer,
    ricercaEffettuata: ricercaEffettuataReducer,
    statoRichiesta: statoRichiestaReducer
  }
})