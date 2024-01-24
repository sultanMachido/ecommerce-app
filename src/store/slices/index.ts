import cartSlice from "./cart-slice";
import { combineReducers } from "redux";
import wishListSlice from "./wishlist-slice";

export const rootReducer = combineReducers({
  cartReducer: cartSlice,
  wishListReducer: wishListSlice,
});
