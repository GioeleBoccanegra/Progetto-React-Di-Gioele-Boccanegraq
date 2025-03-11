import { createSlice } from "@reduxjs/toolkit";


export const inputRicettaSlice = createSlice({
  name: "inputRicetta",
  initialState: {
    value: "",
  },
  reducers: {
    aggiorna: (state, action) => {
      state.value = action.payload;
    },
    svuota: (state) => {
      state.value = ""
    },
  },
})

export const { aggiorna, svuota } = inputRicettaSlice.actions
export const inputRicettaReducer = inputRicettaSlice.reducer