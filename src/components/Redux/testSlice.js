import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setData(state, actions) {
      state.data.push(actions.payload);
    },
    setRemove(state, actions) {
      state.data = state.data.filter((e) => e.id !== actions.payload);
    },
    setDelivery(state, actions) {
      state.data = state.data.filter(
        (e) => e.id === actions.payload && { ...e, delivery: true }
      );
    },
    setReset(state) {
      state.data = [];
    },
  },
});

export const { setData, setRemove, setDelivery, setReset } = testSlice.actions;

const deliverySelector = (state) => state.testSlice.data;

export const filteredDeliverySelector = createSelector(
  deliverySelector,
  (data) => {
    return data.filter((e) => {
      return !e.delivery && e;
    });
  }
);

export default testSlice.reducer;
