"use client";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export default function Header() {
  const { theme } = useContext(TodoContext)!;

  return (
    <header
      className={`${ theme === "light" ? "w-full block h-80 bg-center bg-no-repeat bg-cover header-light md:header-light-mobile" : "w-full block h-80 bg-center bg-no-repeat bg-cover header-dark md:header-dark-mobile" }`}
    ></header>
  );
}
