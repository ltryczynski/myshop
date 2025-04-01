import React from "react";
import Logo from "./logo";
import Card from "../features/card/card";

export default function Header() {
  return (
    <header className="w-full py-6 border-b">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <Card className="w-6 h-6" />
      </div>
    </header>
  );
}
