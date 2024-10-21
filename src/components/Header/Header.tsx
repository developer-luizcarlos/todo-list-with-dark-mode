"use client";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export default function Header() {
  const { theme } = useContext(TodoContext)!;
  return (
    <header
      className={theme === "light" ? "w-full block h-80 bg-center bg-no-repeat bg-header-light-mobile md:bg-header-light-desktop bg-cover" : "w-full block h-80 bg-center bg-no-repeat bg-header-dark-mobile md:bg-header-dark-desktop bg-cover"}></header>
  );
}