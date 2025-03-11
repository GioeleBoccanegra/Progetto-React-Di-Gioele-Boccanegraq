import { createSlice } from "@reduxjs/toolkit";


export const elencoRicetteSlice = createSlice({
  name: "elencoRicette",
  initialState: {
    value: [],
  },
  reducers: {
    aggiornaElenco: (state, action) => {
      state.value = action.payload;
    }
  },
})

export const { aggiornaElenco, svuota } = elencoRicetteSlice.actions
export const elencoRicetteReducer = elencoRicetteSlice.reducer