import { CartActionsProp } from "@/app/product/scoped-component/cart-actions";
import { CartState } from "@/store/slices/cart-slice";
import { WishListState } from "@/store/slices/wishlist-slice";

export const formattedAmount = (
  amount: any,
  options?: { [key: string]: string | number }
) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });
  return formatter.format(amount);
};

export const calculatePriceAfterDiscount = (
  currentPrice: number,
  percentDiscount: number
) => {
  const discountAmount = (currentPrice * percentDiscount) / 100;
  const discount = currentPrice - discountAmount;

  return formattedAmount(discount);
};

export const getCartActiveColor = (
  cartInfo: CartState,
  productInfo: { [key: string]: string }
) => {
  const isInCart = cartInfo?.cartInfo?.cartProducts.filter(
    (product: { id: any }) => product?.id === productInfo?.id
  );

  if (!isInCart?.length) {
    return "";
  }

  return "#23A6F0";
};

export const getWishListActiveColor = (
  wishListInfo: WishListState,
  productInfo: { [key: string]: string }
) => {
  const isInWishList = wishListInfo?.wishListInfo?.wishListProducts.filter(
    (product: { id: any }) => product?.id === productInfo?.id
  );

  if (!isInWishList?.length) {
    return "";
  }

  return "#2DC071";
};

export const getProductQuantityInCart = (
  cartInfo: CartState,
  productId: number
) => {
  const singleProductCount = cartInfo?.cartInfo?.cartProducts.filter(
    (product: { id: any }) => product?.id === productId
  );

  return singleProductCount?.length;
};
