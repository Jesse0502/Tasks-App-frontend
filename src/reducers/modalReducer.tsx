import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { state: false, edit: {} },
  reducers: {
    setModal(state: any, action: any) {
      state.state = action.payload.state;
      state.edit = action.payload.edit;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
