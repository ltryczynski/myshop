import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { useAppSelector } from "../../lib/hooks";
import CardModal from "../../components/card-modal";

export default function Card({
  fill = "#000000",
  className,
}: {
  fill?: string;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEmpty, setIsEmpty] = useState(true);
  const card = useAppSelector((state) => state.card);

  useEffect(() => {
    if (card.products.length > 0) {
      setIsEmpty(false);
    }
  }, [card.products]);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={cn("relative w-max h-max cursor-pointer", className)}
        onClick={handleCardClick}>
        <svg
          fill={isEmpty ? "#000000" : "#0000ff"}
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
        </svg>
        {card.products.length > 0 && (
          <div className="absolute -bottom-5 -right-5 bg-red-600 aspect-square rounded-full w-6 h-6 text-white flex items-center justify-center">
            {card.products.length}
          </div>
        )}
      </div>
      {<CardModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
