"use client";

import Button from "@/components/base-components/button";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  addProductToCart,
  incrementCartAmount,
} from "@/store/slices/cart-slice";
import { useNotification } from "@/hooks/notification";
import { useState } from "react";
import { getCartActiveColor, getWishListActiveColor } from "@/utilities";
import { addProductToWishlist } from "@/store/slices/wishlist-slice";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export type CartActionsProp = {
  productInfo: { [key: string]: string };
};

const CartActions = ({ productInfo }: CartActionsProp) => {
  const cartInfo = useSelector((state: RootState) => state.cartReducer);
  const wishListInfo = useSelector((state: RootState) => state.wishListReducer);

  const cartActiveColor = getCartActiveColor(cartInfo, productInfo);
  const wishListActiveColor = getWishListActiveColor(wishListInfo, productInfo);

  const dispatch = useDispatch();
  const { successNotification } = useNotification();

  const addToCart = () => {
    dispatch(addProductToCart(productInfo));
    dispatch(incrementCartAmount(Number(productInfo?.price)));
    successNotification("The product has been added to your cart");
  };
  const addToWishList = () => {
    dispatch(addProductToWishlist(productInfo));
    successNotification("The product has been added to your wishlist");
  };
  return (
    <div className="mt-[67px] flex gap-[20px]">
      <Button customStyle="bg-blue rounded-md w-[148px] h-[44px] text-sm text-white flex items-center ">
        Select Options
      </Button>
      <div className="flex gap-[10px]">
        <button
          className="w-[40px] h-[40px] flex justify-center items-center rounded-full border border-[#E8E8E8]"
          onClick={addToWishList}
          style={{
            backgroundColor: wishListActiveColor,
          }}
          disabled={wishListActiveColor ? true : false}
        >
          <FavoriteBorderIcon color="primary"/>
        </button>
        <button
          className={`w-[40px] h-[40px] flex justify-center items-center rounded-full border border-[#E8E8E8]`}
          onClick={addToCart}
          style={{
            backgroundColor: cartActiveColor,
          }}
          disabled={cartActiveColor ? true : false}
        >
          <Image
            src="/icons/cart-icon.svg"
            alt="favorite icon"
            width={20}
            height={20}
          />
        </button>
        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full border border-[#E8E8E8]">
          <Image
            src="/icons/eye-icon.svg"
            alt="favorite icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default CartActions;
