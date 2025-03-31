import React from "react";
import { TProduct } from "../lib/types";
import AddToCardButton from "./add-to-card-button";

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <article className="flex flex-col border">
      <img src={product.imageUrl} alt={`${product.title}`} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-bold text-xl">{product.title}</h3>
        <p className="mb-4">{product.price} zł</p>
        <AddToCardButton productId={product.id} />
      </div>
    </article>
  );
}
