import BaseModal from "./base-components/modal";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import Button from "./base-components/button";
import { removeProductFromCart } from "@/store/slices/cart-slice";
import { removeProductFromWishList } from "@/store/slices/wishlist-slice";

type WishListModalProps = {
  open: boolean;
  handleClose: () => void;
};
const WishListModal = (props: WishListModalProps) => {
  const wishlist = useSelector((state: RootState) => state.wishListReducer);
  const dispatch = useDispatch();

  const removeProduct = (productId: number) => {
    dispatch(removeProductFromWishList(productId));
  };

  return (
    <BaseModal {...props}>
      <div className="w-8/12  h-full bg-white p-10">
        <div className="flex justify-between">
          <h4 className="text-[20px] text-black">
            Wishlist({wishlist?.wishListInfo?.wishListProducts?.length})
          </h4>
          <span onClick={props?.handleClose}>
          <p className="font-bold text-black">CLOSE</p>
          </span>
        </div>
        <hr />
        <div className="overflow-y-scroll h-[370px]">
          {wishlist?.wishListInfo?.wishListProducts?.length
            ? wishlist?.wishListInfo?.wishListProducts?.map(
                (product: { [key: string]: any }, index: number) => (
                  <div key={product?.id} className="flex">
                    <div className="my-10">
                      <Image
                        src={product?.thumbnail}
                        alt={product?.title}
                        width={200}
                        height={200}
                      />
                      <p className="font-bold py-5">{product?.title}</p>
                      <Button
                        click={() => removeProduct(product?.id)}
                        customStyle="rounded border border-red bg-transparent  flex justify-center items-center rounded-[5px] w-[112px] h-[52px] text-red"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </BaseModal>
  );
};

export default WishListModal;
