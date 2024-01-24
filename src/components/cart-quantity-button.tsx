import Button from "./base-components/button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {
  incrementSingleProductCount,
  decrementSingleProductCount,
  incrementCartAmount,
  decrementCartAmount,
} from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

type CartQuantityButton = {
  quantity: number;
  productIndex: number;
};
const CartQuantityButton = ({ quantity, productIndex }: CartQuantityButton) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state: RootState) => state.cartReducer);
  const productPrice = cartInfo?.cartInfo?.cartProducts[productIndex]?.price;

  const increment = () => {
    dispatch(incrementSingleProductCount(productIndex));
    dispatch(incrementCartAmount(Number(productPrice)));
  };
  const decrement = () => {
    dispatch(decrementSingleProductCount(productIndex));
    dispatch(decrementCartAmount(Number(productPrice)));
  };
  return (
    <div className="flex items-center gap-[15px] w-[145px]">
      <Button
        customStyle="shadow-md rounded-sm border border-blue bg-blue text-white flex justify-center items-center rounded-[5px] w-[52px] h-[52px] text-black"
        click={decrement}
        disabled={quantity === 1 ? true : false}
        pressEffect={true}
      >
        <RemoveIcon />
      </Button>
      <p className="text-black">{quantity}</p>
      <Button
        customStyle="shadow-md rounded-sm border border-blue bg-blue  text-white flex justify-center items-center rounded-[5px] w-[52px] h-[52px] text-black"
        click={increment}
        pressEffect={true}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default CartQuantityButton;
