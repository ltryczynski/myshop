import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../lib/types";

type TSliceProduct = {
  id: TProduct["id"];
  quantity: number;
};

const initialState: { products: TSliceProduct[] } = {
  products: [],
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<TSliceProduct>) => {
      const productInCard = state.products.find((product) => product.id === action.payload.id);
      if (productInCard) {
        const newProduct = {
          id: action.payload.id,
          quantity: productInCard.quantity + action.payload.quantity,
        };

        state.products = state.products.map((product) =>
          product.id === action.payload.id ? newProduct : product
        );
      } else {
        state.products.push(action.payload);
      }
    },
    editProductInCard: (state, action: PayloadAction<TSliceProduct>) => {
      const selectedProduct = state.products.find((product) => product.id === action.payload.id);
      if (selectedProduct) {
        const newProduct = {
          id: action.payload.id,
          quantity: action.payload.quantity,
        };
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? newProduct : product
        );
      }
    },
    removeFromCard: (state, action: PayloadAction<TProduct["id"]>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    removeAllItems: (state) => {
      state.products = [];
    },
  },
});

export const { addToCard, removeFromCard, removeAllItems, editProductInCard } = cardSlice.actions;
export default cardSlice.reducer;
