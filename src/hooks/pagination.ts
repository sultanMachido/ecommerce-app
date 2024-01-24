import { useState } from "react";

export const usePaginationValues = () => {
  const [paginationValue, setPaginationValue] = useState({
    limit: 10,
    skip: 0,
  });

  const updatePaginationValues = (newValue: number) => {
    setPaginationValue({
      ...paginationValue,
      skip: paginationValue.skip + newValue,
    });
  };

  return {
    paginationValue,
    updatePaginationValues,
  };
};
