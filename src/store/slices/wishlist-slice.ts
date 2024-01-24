import { createSlice } from "@reduxjs/toolkit";

export interface WishListState {
  wishListInfo: { [key: string]: any };
}

const initialState: WishListState = {
  wishListInfo: {
    wishListProducts: [],
  },
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.wishListInfo = {
        ...state.wishListInfo,
        wishListProducts: [
          ...state.wishListInfo.wishListProducts,
          action.payload,
        ],
      };
    },
    removeProductFromWishList: (state, action) => {
      const retainedProduct = state.wishListInfo.wishListProducts.filter(
        (product: { id: any }) => product.id !== action.payload
      );
      state.wishListInfo = {
        ...state.wishListInfo,
        wishListProducts: [...retainedProduct],
      };
    },
  },
});

export const { addProductToWishlist, removeProductFromWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
