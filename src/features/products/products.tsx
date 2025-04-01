import React from "react";
import ProductList from "../../components/product-list";
import { useAppSelector } from "../../lib/hooks";
import ProductPagination from "../../components/product-pagination";

export default function Products() {
  const { products, currentPage, itemsPerPage } = useAppSelector((state) => state.products);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="space-y-6">
      <ProductList className="mt-6 container mx-auto" products={paginatedProducts} />
      <ProductPagination />
    </section>
  );
}
