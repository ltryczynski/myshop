import React, { useMemo, useState } from "react";
import Modal from "./modal";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { editProductInCard, removeAllItems, removeFromCard } from "../features/card/card-slice";
import { TProduct } from "../lib/types";
import clsx from "clsx";

type CardModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CardModal({ isModalOpen, setIsModalOpen }: CardModalProps) {
  const products = useAppSelector((state) => state.products.products);
  const card = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();

  const handleCloseModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    setIsModalOpen(false);
  };
  const [isCardValid, setIsCardValid] = useState(true);

  const totalAmount = useMemo(() => {
    return card.products.reduce((acc, cur) => {
      const product = products.find((item) => item.id === cur.id);
      return acc + (product?.price || 0) * cur.quantity;
    }, 0);
  }, [card.products, products]);

  const handleRemoveProductFromCardClick = (id: TProduct["id"]) => {
    dispatch(removeFromCard(id));
  };

  return isModalOpen ? (
    <Modal onClose={handleCloseModal}>
      <div className="space-y-6">
        <h2 className="text-2xl font-medium">Koszyk</h2>
        <ul>
          <li className="grid grid-cols-4 font-medium border-b border-black py-2">
            <p>Nazwa</p>
            <p>Cena</p>
            <p>Ilość</p>
            <p>Akcje</p>
          </li>
          {card.products.map((cardProduct) => {
            const selectedProduct = products.find((p) => p.id === cardProduct.id);
            if (!selectedProduct) return null;
            const isProductValid = selectedProduct.stock < cardProduct.quantity;
            if (isCardValid && !isProductValid) setIsCardValid(false);
            return (
              <li
                className={clsx("grid grid-cols-4 border-b items-center py-2", {
                  "bg-red-600/20": isProductValid,
                })}
                key={selectedProduct.id}>
                <p>{selectedProduct.title}</p>
                <p>{selectedProduct.price}</p>
                <p>
                  {/* Fix rerenders */}
                  <input
                    type="number"
                    defaultValue={cardProduct.quantity}
                    max={selectedProduct.stock}
                    onBlur={(e) =>
                      dispatch(
                        editProductInCard({
                          id: selectedProduct.id,
                          quantity: +e.target.value,
                        })
                      )
                    }
                  />
                  {isProductValid && <span>(Maks: {selectedProduct.stock})</span>}
                </p>
                <div className="">
                  <button
                    className="bg-red-600 text-white px-4 py-2"
                    onClick={() => handleRemoveProductFromCardClick(cardProduct.id)}>
                    Usuń produkt
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <section className="space-y-4">
          <p className="font-medium text-xl">Podsumowanie</p>
          <p>Łączna kwota: {totalAmount} zł</p>
          <button
            className="py-2 px-4 bg-indigo-600 text-white mt-2 disabled:bg-indigo-200 disabled:text-black"
            onClick={() => dispatch(removeAllItems())}
            disabled={!isCardValid}>
            Przechodzę do podsumowania
          </button>
        </section>
      </div>
    </Modal>
  ) : null;
}
