import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setBasket(state, actions) {
      state.basket.push(actions.payload);
    },
    setReset(state) {
      state.basket = [];
    },
    setRemove(state, actions) {
      state.basket = state.basket.filter((e) => e.id !== actions.payload);
    },
    setCountPlus(state, actions) {
      state.basket = state.basket.map((e) =>
        e.id === actions.payload ? { ...e, count: e.count + 1 } : e
      );
    },
    setCountMinus(state, actions) {
      state.basket = state.basket.map((e) =>
        e.id === actions.payload
          ? { ...e, count: e.count < 1 ? 0 : e.count - 1 }
          : e
      );
    },
  },
});

export const {
  setBasket,
  setReset,
  setRemove,
  setCountPlus,
  setCountMinus,
  setBuy,
} = basketSlice.actions;

export default basketSlice.reducer;
