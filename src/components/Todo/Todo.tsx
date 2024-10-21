"use client";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import TaskElement from "../TaskElement/TaskElement";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

export default function Todo() {
  const { theme,changeTheme } = useContext(TodoContext)!;

  return (
    <section className="w-[500px] fixed top-[35%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-very-light-gray uppercase font-bold">todo</h1>
          <button
            onClick={() => changeTheme()}
            className="text-white text-2xl cursor-pointer">
            {theme === "light" ? <IoMoon /> : <IoIosSunny />}
          </button>
        </div>
        <div className="w-full h-12 bg-very-light-gray rounded-md flex items-center gap-4 p-4">
          <div className="w-6 h-6 border-2 rounded-full"></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="placeholder:text-very-dark-grayish-blue w-full h-full outline-none text-lg"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1">
        <TaskElement />
      </div>
    </section>
  );
}