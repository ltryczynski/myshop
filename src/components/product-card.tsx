import React, { useRef, useState } from "react";
import { TProduct } from "../lib/types";
import AddToCardButton from "./add-to-card-button";
import ProductModal from "./product-modal";

export default function ProductCard({ product }: { product: TProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpenProductClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) setIsModalOpen(true);
  };

  return (
    <>
      <article className="flex flex-col border" onClick={handleOpenProductClick}>
        <img src={product.imageUrl} alt={`${product.title}`} className="w-full h-40 object-cover" />
        <div className="p-3">
          <h3 className="font-bold text-xl">{product.title}</h3>
          <p className="mb-4">{product.price} zł</p>
          <AddToCardButton productId={product.id} ref={buttonRef} />
        </div>
      </article>
      {<ProductModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} product={product} />}
    </>
  );
}
