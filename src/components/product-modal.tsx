import React, { useState } from "react";
import Modal from "./modal";
import { TProduct } from "../lib/types";
import { useAppDispatch } from "../lib/hooks";
import { addToCard } from "../features/card/card-slice";

type ProductModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: TProduct;
};

export default function ProductModal({ isModalOpen, setIsModalOpen, product }: ProductModalProps) {
  const [quantityInputValue, setQuantityInputValue] = useState(1);
  const showQuantityWarning = quantityInputValue > product.stock;

  const dispatch = useAppDispatch();

  const handleCloseModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    setIsModalOpen(false);
  };

  const handleAddToCardClick = () => {
    if (quantityInputValue > product.stock) {
    } else {
      dispatch(
        addToCard({
          id: product.id,
          quantity: quantityInputValue,
        })
      );
      setIsModalOpen(false);
    }
  };

  return isModalOpen ? (
    <Modal onClose={handleCloseModal}>
      <div className="flex flex-col justify-center items-center gap-6">
        <img src={product.imageUrl} alt={product.title} className="max-w-[400px]" />
        <h2 className="text-2xl font-medium">{product.title}</h2>
        <p>{product.description}</p>
        <p>Dostępne sztuki: </p>
        <input
          type="number"
          className="border border-black px-2 w-16"
          value={quantityInputValue}
          max={product.stock}
          min={1}
          onChange={(e) => setQuantityInputValue(+e.target.value)}
        />
        <button
          disabled={showQuantityWarning}
          className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-500 transition disabled:bg-indigo-200 disabled:text-black"
          onClick={handleAddToCardClick}>
          Dodaj do koszyka
        </button>
        {showQuantityWarning && (
          <div className="text-red-600">
            Zamówienie przekracza stan magazynowy, zmniejsz ilość sztuk
          </div>
        )}
      </div>
    </Modal>
  ) : null;
}
