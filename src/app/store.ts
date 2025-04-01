import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/products-slice";
import cardReducer from "../features/card/card-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    card: cardReducer
  },

})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
