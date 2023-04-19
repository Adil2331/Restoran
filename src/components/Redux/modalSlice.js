import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // setOpen(state) {
    //   state.open = !state.open;
    // },
    handleOpen(state) {
      state.open = true;
    },
    handleClose(state) {
      state.open = false;
    },
    setModalOpen(state) {
      state.open = true;
    },
    setModalClose(state) {
      state.open = false;
    },
  },
});

export const { handleOpen, handleClose, setModalClose, setModalOpen } =
  modalSlice.actions;

export default modalSlice.reducer;
