import { navItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { useDisclose } from "@/hooks/disclose";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CartModal from "./cart-modal";
import WishListModal from "./wishlist-modal";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const MobileNavigation = () => {
  const { open, handleClose, handleOpen } = useDisclose();
  const {
    open: wishListModalOpen,
    handleClose: closeWishListModal,
    handleOpen: openWishListModal,
  } = useDisclose();
  const cartInfo = useSelector((state: RootState) => state.cartReducer);
  const wishlist = useSelector((state: RootState) => state.wishListReducer);
  return (
    <>
      <CartModal open={open} handleClose={handleClose} />
      <WishListModal
        open={wishListModalOpen}
        handleClose={closeWishListModal}
      />
      <div className="px-[147px] text-center">
        {navItems?.map((item) => (
          <ul>
            <li className="py-[15px] text-black">
              <Link href={item?.path}>{item?.name}</Link>
              {item?.children?.length ? <ExpandMoreIcon /> : null}
            </li>
          </ul>
        ))}
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="text-[#23A6F0] my-10 font-[700] text-[14px] flex items-center">
          <span>
            <Image
              src="/icons/ec-user-icon.svg"
              alt=" "
              width={12}
              height={12}
            />
          </span>
          <span className="pl-[2px] flex gap-[5px]">
            <Link href="#">Login</Link>/<Link href="#">Register</Link>
          </span>
        </div>
        <Image src="/icons/ec-glass.svg" alt=" " width={12} height={12} />
        <div className="my-10">
          <span className="flex" onClick={handleOpen}>
            <Image
              src="/icons/ec-cart-icon.svg"
              alt=" "
              width={12}
              height={12}
            />
            <sup className="text-[#23A6F0]">
              {cartInfo?.cartInfo?.cartProducts?.length}
            </sup>
          </span>
        </div>
        <span className="flex pb-10" onClick={openWishListModal}>
          <Image src="/icons/ec-love-icon.svg" alt=" " width={12} height={12} />
          <sup className="text-[#23A6F0]">
            {wishlist?.wishListInfo?.wishListProducts?.length}
          </sup>
        </span>
      </div>
    </>
  );
};

export default MobileNavigation;
