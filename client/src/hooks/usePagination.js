import { useCallback, useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const paginate = useCallback((pageNumber) => {
    setPage(pageNumber);
  }, []);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((prev) => prev - 1);
  }, []);

  return [
    page,
    setPage,
    {
      paginate,
      nextPage,
      prevPage
    }
  ];
};

export default usePagination;
