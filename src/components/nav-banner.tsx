"use client";
import { socialMediaChannelsIcon } from "@/constants";
import SocialMediaIcons from "./social-media-icons";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    background: "transparent",
  },
});

const NavBanner = () => {
  const classes = useStyles();
  return (
    <>
      <div className="flex p-5 w-[98%] mx-auto">
        <div className="flex items-center w-[10%]">
          <span>
            <Image
              src="/icons/ec-phone-icon.svg"
              alt=""
              width={15}
              height={15}
            />
          </span>
          <p className="text-[14px] font-[700] pl-[2px]">(225) 555-0118</p>
        </div>
        <div className="flex justify-between text-[14px] font-[700] w-[90%]">
          <div className="flex">
            <Image
              src="/icons/ec-mail-icon.svg"
              alt=""
              width={15}
              height={15}
            />
            <p className="pl-2">
              <Link href="mailto:michelle.rivera@example.com">
                michelle.rivera@example.com
              </Link>
            </p>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center">
            <p>Follow Us :</p>
            <SocialMediaIcons iconList={socialMediaChannelsIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBanner;
