import { footerLinks, footerSocialMediaIcons } from "@/constants";
import SocialMediaIcons from "./social-media-icons";
import Link from "next/link";
import Button from "./base-components/button";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAFA]">
        <div className="w-[80%] mx-auto flex items-center justify-between py-[40px]">
          <h4 className="text-[24px] font-bold text-black">Bandage</h4>
          <SocialMediaIcons
            iconList={footerSocialMediaIcons}
            width={24}
            height={24}
          />
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="w-[80%] mx-auto flex flex-wrap lg:flex-nowrap py-[50px] justify-between">
          <div className="flex w-[60%] flex-wrap lg:flex-nowrap justify-between">
            {footerLinks?.length
              ? footerLinks?.map((link) => (
                  <div key={link?.header} className="my-[20px] lg:my-[0px]">
                    <h4 className="text-[16px] font-bold text-black pb-[20px]">
                      {link?.header}
                    </h4>
                    <ul className="block">
                      {link?.links.map((link) => (
                        <li
                          key={link}
                          className="text-grey text-[14px] font-bold pb-[10px]"
                        >
                          <Link href="#">{link}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : null}
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-black pb-[20px]">
              Get In Touch
            </h4>
            <div className="flex">
              <div className="w-[204px] h-[58px]">
                <input
                  className="h-full w-full pl-[20px] border border-[#E6E6E6] rounded-l-md bg-[#F9F9F9]"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-[117px] h-[58px]">
                <Button customStyle="bg-blue flex justify-center items-center  w-full h-full text-white rounded-r-md">
                  Subscribe
                </Button>
              </div>
            </div>
            <p className="text-[12px] text-black">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#FAFAFA] py-[25px]">
        <div className="w-[80%] mx-auto">
          <p className="text-center lg:text-left text-[14px] font-bold text-grey">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
