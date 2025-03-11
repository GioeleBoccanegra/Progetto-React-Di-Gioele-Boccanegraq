import { createSlice } from "@reduxjs/toolkit";


export const informazioniRicettaSlice = createSlice({
  name: "informazioniRicetta",
  initialState: {
    value: {},
  },
  reducers: {
    aggiornaInfo: (state, action) => {
      state.value = action.payload;
    }
  },
})

export const { aggiornaInfo } = informazioniRicettaSlice.actions
export const informazioniRicettaReducer = informazioniRicettaSlice.reducer