import React from "react";
import { DUMMY_PRODUCTS } from "../lib/data";
import ProductCard from "./product-card";
import { cn } from "../lib/utils";

export default function ProductList({ className }: { className?: string }) {
  return (
    <section className={cn("grid grid-cols-4 gap-6", className)}>
      {DUMMY_PRODUCTS.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}
