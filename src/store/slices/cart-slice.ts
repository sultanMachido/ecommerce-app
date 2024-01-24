import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartInfo: { [key: string]: any };
}

const initialState: CartState = {
  cartInfo: {
    cartAmount: 0,
    cartProducts: [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cartInfo = {
        ...state.cartInfo,
        cartProducts: [
          ...state.cartInfo.cartProducts,
          { ...action.payload, count: 1 },
        ],
      };
    },
    removeProductFromCart: (state, action) => {
      const retainedProduct = state.cartInfo.cartProducts.filter(
        (product: { id: any }) => product.id !== action.payload
      );
      state.cartInfo = {
        ...state.cartInfo,
        cartProducts: [...retainedProduct],
      };
    },
    incrementSingleProductCount: (state, action) => {
      const productInfo = state.cartInfo.cartProducts[action.payload];
      const newProductCount = {
        ...productInfo,
        count: productInfo?.count + 1,
      };
      state.cartInfo.cartProducts[action.payload] = newProductCount;
    },
    decrementSingleProductCount: (state, action) => {
      const productInfo = state.cartInfo.cartProducts[action.payload];
      const newProductCount = {
        ...productInfo,
        count: productInfo?.count - 1,
      };
      state.cartInfo.cartProducts[action.payload] = newProductCount;
    },
    incrementCartAmount: (state, action) => {
      state.cartInfo = {
        ...state.cartInfo,
        cartAmount: state.cartInfo.cartAmount + action.payload,
      };
    },
    decrementCartAmount: (state, action) => {
      state.cartInfo = {
        ...state.cartInfo,
        cartAmount: state.cartInfo.cartAmount - action.payload,
      };
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  incrementCartAmount,
  decrementCartAmount,
  incrementSingleProductCount,
  decrementSingleProductCount,
} = cartSlice.actions;

export default cartSlice.reducer;
