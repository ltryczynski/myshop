import React from "react";
import { TProduct } from "../lib/types";
import { addToCard } from "../features/card/card-slice";
import { useAppDispatch } from "../lib/hooks";

export default function AddToCardButton({
  productId,
  ref,
}: {
  productId: TProduct["id"];
  ref?: React.RefObject<HTMLButtonElement | null>;
}) {
  const dispatch = useAppDispatch();

  const handleAddToCardClick = () => {
    dispatch(
      addToCard({
        id: productId,
        quantity: 1,
      })
    );
  };

  return (
    <button
      ref={ref}
      className="bg-indigo-600 text-white px-4 py-2 transition hover:bg-indigo-700 flex items-center gap-2"
      onClick={handleAddToCardClick}>
      <AddToCardIcon />
      Dodaj do koszyka
    </button>
  );
}

function AddToCardIcon() {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 7V13M11 10H17M14 21C11 21 8 21 5 21C3.89543 21 3.00001 20.1069 3.00001 19.0023C3 16.2888 3 11.5934 3 10M9 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H9C7.89543 3 7 3.89543 7 5V15C7 16.1046 7.89543 17 9 17Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
