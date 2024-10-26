"use client";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export default function Header() {
  const { theme } = useContext(TodoContext)!;

  const backgroundImage =
    theme === "light"
      ? "bg-[url('./images/bg-desktop-light.jpg')] md:bg-[url('./images/bg-mobile-light.jpg')]"
      : "bg-[url('./images/bg-mobile-dark.jpg')] md:bg-[url('./images/bg-desktop-dark.jpg')]";

  return (
    <header
      className={`w-full block h-80 bg-center bg-no-repeat bg-cover ${ backgroundImage }`}
    ></header>
  );
}
