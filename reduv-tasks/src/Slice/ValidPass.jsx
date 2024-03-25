import { createSlice } from "@reduxjs/toolkit";

const ValidPass = createSlice({
  name: "ValidPass",
  initialState: '',
  reducers: {
    passwordValid: function (state, action) {
      return action.payload;
    },
  },
});

export const { passwordValid } = ValidPass.actions;
export default ValidPass.reducer;