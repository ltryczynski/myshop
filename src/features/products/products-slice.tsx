import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DUMMY_PRODUCTS } from "../../lib/data";

const initialState = {
  products: [...DUMMY_PRODUCTS],
  currentPage: 1,
  itemsPerPage: 4,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = productsSlice.actions;
export default productsSlice.reducer;
