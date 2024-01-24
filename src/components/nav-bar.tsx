"use client";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { navItems, socialMediaChannelsIcon } from "@/constants";
import Link from "next/link";
import NavItems from "./nav-items";
import NavBanner from "./nav-banner";
import { useDisclose } from "@/hooks/disclose";
import CartModal from "./cart-modal";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import WishListModal from "./wishlist-modal";
import MobileNavigation from "./mobile-nav";
import { useEffect } from "react";

const Navbar = () => {
  const { open, handleClose, handleOpen } = useDisclose();
  const {
    open: isMobileNavVisible,
    handleClose: hideMobileNav,
    handleOpen: showMobileNav,
  } = useDisclose();
  const {
    open: wishListModalOpen,
    handleClose: closeWishListModal,
    handleOpen: openWishListModal,
  } = useDisclose();
  const cartInfo = useSelector((state: RootState) => state.cartReducer);
  const wishlist = useSelector((state: RootState) => state.wishListReducer);
  useEffect(() => {
    hideMobileNav();
  }, []);

  const toggleMobileNavDisplay = () => {
    if (!isMobileNavVisible) {
      showMobileNav();
    } else {
      hideMobileNav();
    }
  };
  return (
    <section className="text-white">
      <CartModal open={open} handleClose={handleClose} />
      <WishListModal
        open={wishListModalOpen}
        handleClose={closeWishListModal}
      />
      <div className="hidden lg:block bg-[#24856d] w-full">
        <NavBanner />
      </div>
      <nav className="w-full bg-white">
        <div className="flex justify-between lg:justify-unset items-center p-5  w-[98%] mx-auto">
          <div className="w-[10%]">
            <h2 className="text-[24px] font-[700] text-[#252B42]">
              <Link href="#">Bandage</Link>
            </h2>
          </div>
          <div className="hidden lg:flex justify-between w-[90%] items-center pl-[90px]">
            <div className="w-[40%]">
              <NavItems navItems={navItems} />
            </div>
            <div className="w-[27%] flex justify-between pr-[11px]">
              <p className="text-[#23A6F0] font-[700] text-[14px] flex items-center">
                <span>
                  <Image
                    src="/icons/ec-user-icon.svg"
                    alt=" "
                    width={12}
                    height={12}
                  />
                </span>
                <span className="pl-[2px]">
                  <Link href="#">Login</Link>/<Link href="#">Register</Link>
                </span>
              </p>
              <Image src="/icons/ec-glass.svg" alt=" " width={12} height={12} />
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
              <span className="flex" onClick={openWishListModal}>
                <Image
                  src="/icons/ec-love-icon.svg"
                  alt=" "
                  width={12}
                  height={12}
                />
                <sup className="text-[#23A6F0]">
                  {wishlist?.wishListInfo?.wishListProducts?.length}
                </sup>
              </span>
            </div>
          </div>
          {/* mobile nav */}
          <div
            className="block lg:hidden w-[22px] h-[13px]"
            onClick={() => toggleMobileNavDisplay()}
          >
            <Image
              src="/icons/snackbar-icon.svg"
              alt="snackbar-icon"
              width={22}
              height={13}
            />
          </div>
        </div>
        {isMobileNavVisible ? <MobileNavigation /> : null}
      </nav>
    </section>
  );
};

export default Navbar;
