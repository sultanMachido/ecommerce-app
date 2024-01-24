"use client";
import FeaturedProductsCard from "@/components/featured-products-card";
import { SkeletonLoaderWrapper } from "./skeleton";
import Button from "./base-components/button";
import { useEffect, useState } from "react";
import { usePaginationValues } from "@/hooks/pagination";
import { useGetPaginatedProducts } from "@/api/requests";
import { useRouter } from "next/navigation";

type ProductDisplayProps = {
  hasPagination?: boolean;
};

const ProductDisplay = ({ hasPagination }: ProductDisplayProps) => {
  const [products, setProducts] = useState<{ [key: string]: string }[]>([]);
  const { paginationValue, updatePaginationValues } = usePaginationValues();
  const { data, isLoading, isFetching } = useGetPaginatedProducts(
    paginationValue?.skip
  );
  const router = useRouter();

  useEffect(() => {
    if (data?.data?.products) {
      setProducts([...products, ...data?.data?.products]);
    }
  }, [data]);

  const fetchProduct = () => {
    updatePaginationValues(10);
  };

  const viewProduct = (productId: number) => {
    router.push(`/product/${productId}`);
  };
  return (
    <>
      <div className="w-[90%] mx-auto h-auto my-10">
        {isLoading ? (
          <SkeletonLoaderWrapper />
        ) : (
          <div className="flex flex-wrap justify-center gap-[8px]">
            <FeaturedProductsCard
              products={products}
              viewProduct={viewProduct}
            />
          </div>
        )}
      </div>
      {hasPagination && (
        <div className="flex justify-center">
          {products?.length < 100 ? (
            <Button
              click={fetchProduct}
              pressEffect={true}
              customStyle="rounded border border-blue bg-transparent rounded-solid  bg-blue  flex justify-center items-center rounded-[5px] w-[292px] h-[52px] text-white"
            >
              {isFetching ? (
                <p className="text-blue">FETCHING PRODUCTS...</p>
              ) : (
                <p className="text-blue">LOAD MORE PRODUCTS</p>
              )}
            </Button>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
