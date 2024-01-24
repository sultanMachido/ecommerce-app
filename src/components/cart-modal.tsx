import { ReactElement } from "react";
import BaseModal from "./base-components/modal";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { formattedAmount } from "@/utilities";
import Image from "next/image";
import Button from "./base-components/button";
import CartQuantityButton from "./cart-quantity-button";
import {
  decrementCartAmount,
  removeProductFromCart,
} from "@/store/slices/cart-slice";

type CartModalProps = {
  open: boolean;
  handleClose: () => void;
};
const CartModal = (props: CartModalProps) => {
  const cartInfo = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const products = cartInfo?.cartInfo?.cartProducts;

  const removeProduct = (
    productId: number,
    productsPrice: number,
    productCount: number
  ) => {
    const priceByCount = productCount * productsPrice;
    dispatch(removeProductFromCart(productId));
    dispatch(decrementCartAmount(priceByCount));
  };

  return (
    <BaseModal {...props}>
      <div className="w-8/12  h-full bg-white p-10">
        <h4 className="font-bold text-black text-[18px]">
          {formattedAmount(cartInfo?.cartInfo?.cartAmount)}
        </h4>
        <div className="flex justify-between">
          <h4 className="text-[20px] text-black">
            Cart({cartInfo?.cartInfo?.cartProducts?.length})
          </h4>
          <span onClick={props?.handleClose}>
            <p className="font-bold">CLOSE</p>
          </span>
        </div>
        <hr />
        <div className="overflow-y-scroll h-[370px]">
          {cartInfo?.cartInfo?.cartProducts?.length
            ? cartInfo?.cartInfo?.cartProducts?.map(
                (product: { [key: string]: any }, index: number) => (
                  <div
                    key={product?.id}
                    className="block pb-5 lg:pb-[0] lg:flex items-center gap-[18px]"
                  >
                    <div className="my-10">
                      <Image
                        src={product?.thumbnail}
                        alt={product?.title}
                        width={200}
                        height={200}
                      />
                      <p className="font-bold py-5">{product?.title}</p>
                      <Button
                        click={() =>
                          removeProduct(
                            product?.id,
                            product?.price,
                            product?.count
                          )
                        }
                        customStyle="rounded border border-red bg-transparent  flex justify-center items-center rounded-[5px] w-[112px] h-[52px] text-red"
                      >
                        Remove
                      </Button>
                    </div>
                    <CartQuantityButton
                      quantity={product?.count}
                      productIndex={index}
                    />
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </BaseModal>
  );
};

export default CartModal;
