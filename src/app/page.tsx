"use client";
import { useContext } from "react";
import { TodoContext } from "@/components/TodoContext/TodoContext";
import Todo from "@/components/Todo/Todo";

export default function Home() {
  const { theme } = useContext(TodoContext)!;

  return (
    <main
      className={theme === "light" ? "w-full h-full bg-light-theme-very-light-grayish-blue " : "w-full h-full bg-dark-theme-very-dark-blue "}>
      <Todo />
    </main>
  );
}