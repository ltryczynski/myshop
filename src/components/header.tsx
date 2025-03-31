import React, { useState } from "react";
import Logo from "./logo";
import Basket from "./basket";

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <header className="w-full py-6 border-b">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Basket fill={isEmpty ? "#000000" : "#ff0000"} className="w-6 h-6" />
      </div>
    </header>
  );
}
