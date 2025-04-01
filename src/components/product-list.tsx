import React from "react";
import ProductCard from "./product-card";
import { cn } from "../lib/utils";
import { TProduct } from "../lib/types";

export default function ProductList({
  className,
  products,
}: {
  className?: string;
  products: TProduct[];
}) {
  return (
    <section className={cn("grid grid-cols-4 gap-6", className)}>
      {products.length > 0 &&
        products.map((product) => <ProductCard product={product} key={product.id} />)}
    </section>
  );
}
