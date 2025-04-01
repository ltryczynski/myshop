import { cn } from "../lib/utils";
import { createPortal } from "react-dom";

type ModalProps = {
  className?: string;
  children: React.ReactNode;
  onClose: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export default function Modal({ className, children, onClose, ref }: ModalProps) {
  return createPortal(
    <>
      <div className="w-full h-full absolute inset-0 m-auto flex items-center justify-center bg-gray-50/20 backdrop-blur-xl">
        <section
          className={cn(" bg-gray-50/95 backdrop-blur-md lg:w-[80%] lg:h-[80%] border", className)}>
          <div className="relative w-full h-full p-5" ref={ref}>
            {children}
          </div>
          <CloseModal onClick={onClose} />
        </section>
      </div>
    </>,
    document.body
  );
}

function CloseModal({
  onClick,
}: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button className="absolute top-0 right-2 w-4 h-4" onClick={onClick}>
      X
    </button>
  );
}
