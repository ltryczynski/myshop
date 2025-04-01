import React from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { setPage } from "../features/products/products-slice";

export default function ProductPagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.products.currentPage);
  const itemsPerPage = useAppSelector((state) => state.products.itemsPerPage);
  const products = useAppSelector((state) => state.products.products);

  const handleChangePageClick = (amount: number) => {
    dispatch(setPage(currentPage + amount));
  };

  return (
    <div className="container mx-auto flex justify-between items-center">
      <div>
        {currentPage > 1 && (
          <button
            className="bg-gray-50 border px-4 py-2 cursor-pointer"
            onClick={() => handleChangePageClick(-1)}>
            prev
          </button>
        )}
      </div>
      <div>
        {itemsPerPage * currentPage < products.length && (
          <button
            className="bg-gray-50 border px-4 py-2 cursor-pointer mr-0"
            onClick={() => handleChangePageClick(1)}>
            next
          </button>
        )}
      </div>
    </div>
  );
}
