import StarRating from "@/components/rating";
import { formattedAmount } from "@/utilities";
import Image from "next/image";
import ColorPicker from "../scoped-component/color-picker";
import Button from "@/components/base-components/button";
import ProductDisplay from "@/components/product-display";
import { brands } from "@/constants";
import CartActions from "../scoped-component/cart-actions";
import Link from "next/link";

async function getProductById(productId: string) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`, {
    method: "GET",
  });

  return response.json();
}

export default async function Page({ params }: { params: any }) {
  const response = await getProductById(params?.productId);
  const { title, thumbnail, rating, price, stock, description, images } =
    response;

  return (
    <div className="w-full mx-auto">
      <section className="bg-[#FAFAFA]">
        <div className="w-[88%] lg:w-[80%] mx-auto py-[24px]">
          <span className="flex items-center gap-[15px]">
            <p className="text-[14px] text-black font-bold">
              <Link href="/">Home</Link>
            </p>{" "}
            <span>
              <Image
                src="/icons/carret-right-icon.svg"
                alt="icon"
                width={9}
                height={16}
              />
            </span>
            <p className="text-[14px] text-[#BDBDBD] font-bold">Shop</p>
          </span>

          <div className="flex flex-wrap lg:flex-nowrap gap-[100px] mt-[24px]">
            <div>
              <div className="w-[98%] lg:w-[506px] h-[450px]">
                <Image
                  src={thumbnail}
                  alt="product image"
                  width={506}
                  height={450}
                  className="w-full h-full"
                />
              </div>
              <div className="flex mt-[21px] gap-[19px]">
                {[thumbnail, images[0]]?.map((image) => (
                  <div key={image} className="w-[100px] h-[75px]">
                    <Image
                      src={image}
                      alt="thumbnail image"
                      width={100}
                      height={75}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[313px] lg:w-auto">
              <h4 className="text-[20px] text-black py-[10px]">{title}</h4>
              <div className="flex items-center gap-[10px]">
                <StarRating value={rating} />
                <p className="text-[14px] font-bold ">10 Reviews</p>
              </div>
              <p className="font-bold text-[24px] text-black pt-[20px]">
                {formattedAmount(price)}
              </p>
              <p className="text-[14px] font-bold text-black">
                Availabilty :
                {stock && (
                  <span className="text-[14px] text-blue">In Stock </span>
                )}
                {!stock && (
                  <span className="text-[14px] text-red">Out Stock </span>
                )}
              </p>
              <div className="h-[119px] pt-[20px]">
                <p className="text-[14px] text-grey">{description}</p>
              </div>
              <hr className=" w-[445px]" />
              <ColorPicker />
              <CartActions productInfo={response} />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="flex justify-center gap-[24px] py-[24px]">
          <p className="font-[600] text-black text-[14px]">Description</p>
          <p className="font-bold text-black text-[14px]">
            Additional Information
          </p>
          <p className="font-bold text-black text-[14px]">
            Review <span className="text-[#23856D]">(0)</span>
          </p>
        </div>
        <hr className="w-[80%] mx-auto" />
        <div className="flex w-[80%] mx-auto justify-between py-[46px]">
          <div className="w-[43%]">
            <h5 className="text-[24px] font-bold text-black">
              the quick fox jumps over{" "}
            </h5>
            <p className="py-[30px] text-[14px] text-grey">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <div className="border-l-[3px] pl-[24px] border-[#23856D] mb-[30px]">
              <p className=" text-[14px] text-grey">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <p className="pb-[30px] text-[14px] text-grey">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="w-[413px] h-[372px]">
            <Image
              src="/images/sample-1.webp"
              alt="additional information image"
              width={413}
              height={372}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="hidden lg:block bg-[#FAFAFA]">
        <div className="w-[80%] mx-auto py-[24px]">
          <h3 className="text-[24px] font-bold text-black pb-[24px]">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="w-full mx-auto" />
          <ProductDisplay hasPagination={false} />
        </div>
      </section>

      <section className="bg-[#FAFAFA]">
        <div className="flex-col lg:flex-row flex justify-center items-center lg:gap-[86px] py-[50px]">
          {brands?.map((brand) => (
            <div key={brand.name} className="my-[30px] lg:my-[0px]">
              <Image
                src={brand?.icon}
                alt={brand?.name}
                width={10}
                height={10}
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
