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
  },
})

export const { premuto } = ricercaEffettuataSlice.actions
export const ricercaEffettuataReducer = ricercaEffettuataSlice.reducer