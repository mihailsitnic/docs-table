import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    exampleKey: "example value",
  },
  reducers: {
    exampleKey: (state, action) => {
      state.exampleKey = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export type RootState = ReturnType<typeof reducer>;

export const { exampleKey } = rootSlice.actions;
