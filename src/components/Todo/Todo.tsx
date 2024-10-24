"use client";
import { useContext,useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import TaskElement from "../TaskElement/TaskElement";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

export default function Todo() {
  const { theme,changeTheme,state,dispatch } = useContext(TodoContext)!;
  const [newTaskValue,setNewTaskValue] = useState<string>("");

  const createNewTask = () => {
    if(newTaskValue.trim()) {
      dispatch({ type: "ADD",payload: newTaskValue });
      setNewTaskValue("");
    };
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === "Enter") {
      createNewTask();
    }
  };

  return (
    <section className="w-[500px] h-80 fixed top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-very-light-gray uppercase font-bold">todo</h1>
          <button
            onClick={() => changeTheme()}
            className="text-white text-2xl cursor-pointer">
            {theme === "light" ? <IoMoon /> : <IoIosSunny />}
          </button>
        </div>
        <div className="w-full h-16 bg-very-light-gray rounded-md flex items-center gap-4 p-4">
          <div
            onClick={() => { createNewTask(); }}
            className="w-6 h-6 border-2 rounded-full"></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            maxLength={35}
            value={newTaskValue}
            onChange={(event) => { setNewTaskValue(event.target.value); }}
            onKeyDown={handleKeyPress}
            className="placeholder:text-very-dark-grayish-blue w-full h-full outline-none text-lg whitespace-nowrap overflow-hidden text-ellipsis"
          />
        </div>
      </div>
      <div className="w-full overflow-x-hidden flex flex-col shadow-xl shadow-slate-300">
        <div className="w-full max-h-[360px] overflow-x-hidden overflow-scroll custom-scroll over overflow-x-hidde">
          {state.map((element) => {
            return <TaskElement
              key={element.id}
              id={element.id}
              text={element.task}
              completed={element.completed}
            />;
          })}
        </div>
      </div>
    </section>
  );
}