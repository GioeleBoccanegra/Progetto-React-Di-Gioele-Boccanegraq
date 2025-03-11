import { createSlice } from "@reduxjs/toolkit";


export const ricercaEffettuataSlice = createSlice({
  name: "iricercaEffettuata",
  initialState: {
    value: false,
  },
  reducers: {
    premuto: (state) => {
      state.value = true;
    },
    resetPremuto: (state) => {
      state.value = false;
    },
  },
})

export const { premuto, resetPremuto } = ricercaEffettuataSlice.actions
export const ricercaEffettuataReducer = ricercaEffettuataSlice.reducer