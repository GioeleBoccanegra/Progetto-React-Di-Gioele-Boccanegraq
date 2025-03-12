import { createSlice } from "@reduxjs/toolkit";


export const statoRichiestaSlice = createSlice({
  name: "statoRichiesta",
  initialState: {
    value: false,
  },
  reducers: {
    registraStato: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { registraStato } = statoRichiestaSlice.actions
export const statoRichiestaReducer = statoRichiestaSlice.reducer