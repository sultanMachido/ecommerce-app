"use client";
import Image from "next/image";
import ProductDisplay from "@/components/product-display";

const services = [
  {
    icon: "/icons/ec-book-reader-icon.svg",
    title: "Easy Wins",
    subTitle: "Get your best looking smile now!",
  },
  {
    icon: "/icons/ec-carbon-book-icon.svg",
    title: "Concrete",
    subTitle:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: "/icons/ec-arrow-growth-icon.svg",
    title: "Hack Growth",
    subTitle:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
];

const FeaturedProducts = () => {
  return (
    <>
      <section className="pt-[161px]">
        <p className="text-center text-[20px] text-[#737373]">
          Featured Products
        </p>
        <h4 className="text-center text-[24px] text-black font-bold pt-[10px]">
          BESTSELLER PRODUCTS
        </h4>
        <p className="text-center text-[14px] text-grey">
          Problems trying to resolve the conflict between
        </p>
        <ProductDisplay hasPagination={true} />
      </section>

      <section className="pt-[161px]">
        <p className="text-center text-[20px] text-[#737373]">
          Featured Products
        </p>
        <h4 className="text-center text-[24px] text-black font-bold pt-[10px]">
          THE BEST SERVICES
        </h4>
        <p className="text-center text-[14px] text-grey">
          Problems trying to resolve the conflict between{" "}
        </p>
        <div className="flex flex-wrap justify-center lg:justify-between mt-[80px]">
          {services?.length
            ? services.map((service) => (
                <div key={service?.title} className="text-center w-[315px]">
                  <div className="mx-auto w-fit">
                    <Image src={service?.icon} alt="" width={72} height={72} />
                  </div>
                  <h4 className="text-black text-[24px] font-bold py-[20px]">
                    {service?.title}
                  </h4>
                  <p className="text-grey text-[14px]">{service?.subTitle}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
