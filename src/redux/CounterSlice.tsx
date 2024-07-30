import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    counting: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { counting } = counterSlice.actions;
export default counterSlice.reducer;
