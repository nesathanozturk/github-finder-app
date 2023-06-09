import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme") === "true" ? true : false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
