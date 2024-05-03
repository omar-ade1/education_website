import { createSlice } from "@reduxjs/toolkit";

const userState = createSlice({
  name: "userState",
  initialState: null,
  reducers: {
    setUserinin: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setUserinin } = userState.actions;

export default userState.reducer;
