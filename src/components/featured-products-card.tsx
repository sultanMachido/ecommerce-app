import { calculatePriceAfterDiscount, formattedAmount } from "@/utilities";
import Image from "next/image";

type FeaturedProductsCardProps = {
  products: { [key: string]: any }[];
  viewProduct: (productId: number) => void;
};

const FeaturedProductsCard = ({
  products,
  viewProduct,
}: FeaturedProductsCardProps) => {
  return (
    <>
      {products?.length
        ? products?.map((product) => (
            <div
              key={product.id}
              className="w-[200px] py-5"
              onClick={() => viewProduct(product?.id)}
            >
              <div className="w-[123px] h-[131px] productImage">
                <Image
                  src={product?.thumbnail}
                  alt="product image"
                  width={183}
                  height={238}
                />
              </div>
              <p className="text-black font-bold text-[14px] text-center py-[10px] px-5">
                {product?.title}
              </p>
              <p className="text-[12px] text-grey font-bold text-center">
                <s>{formattedAmount(product?.price)}</s>
              </p>
              <p className="text-[12px] text-blue font-bold text-center">
                {calculatePriceAfterDiscount(
                  product?.price,
                  product?.discountPercentage
                )}
              </p>
            </div>
          ))
        : null}
    </>
  );
};
export default FeaturedProductsCard;
