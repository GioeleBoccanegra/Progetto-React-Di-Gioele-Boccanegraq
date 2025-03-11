import { configureStore } from "@reduxjs/toolkit";
import { inputRicettaReducer } from "./redux/inputRicettaSlice";
import { elencoRicetteReducer } from "./redux/elenocRicetteSlice";
import { informazioniRicettaReducer } from "./redux/informazioniRicettaSlice";
export default configureStore({
  reducer: {
    inputRicetta: inputRicettaReducer,
    elencoRicette: elencoRicetteReducer,
    informazioniRicetta: informazioniRicettaReducer
  }
})