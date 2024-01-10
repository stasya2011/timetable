import { createSlice } from "@reduxjs/toolkit";

interface IModal {
  isModalOpen: boolean;
}
const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: IModal) => {
      state.isModalOpen = true;
    },
    closeModal: (state: IModal) => {
      state.isModalOpen = false;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { closeModal, openModal } = actions;
export default reducer;
