import { apiClient } from "./index";
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

const GET_PAGINATED_PRODUCTS_ENDPOINT = "/products";

const getPaginatedProducts = async (skip: number) => {
  const requestInfo = {
    url: `${GET_PAGINATED_PRODUCTS_ENDPOINT}?limit=10&skip=${skip}`,
    config: {},
  };

  return await apiClient.get(requestInfo);
};

export const useGetPaginatedProducts = (skips: number) => {
  let queryObject = {
    queryKey: ["getPaginatedProducts", skips],
    queryFn: () => getPaginatedProducts(skips),
    placeholderData: keepPreviousData,
    staleTime: 30000000,
  };
  return useQuery(queryObject);
};
