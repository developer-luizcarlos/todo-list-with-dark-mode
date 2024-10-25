"use client";
import { useContext,useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import TaskElement from "../TaskElement/TaskElement";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

type StatusTask = "all" | "active" | "completed";

export default function Todo() {
  const { theme,changeTheme,state,dispatch } = useContext(TodoContext)!;
  const [newTaskValue,setNewTaskValue] = useState<string>("");
  const [statusTaskShow,setStatusTaskShow] = useState<StatusTask>("all");

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
    <section className="w-[540px] h-80 fixed top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-very-light-gray uppercase font-bold">todo</h1>
          <button
            onClick={() => changeTheme()}
            className="text-white text-2xl cursor-pointer">
            {theme === "light" ? <IoMoon /> : <IoIosSunny />}
          </button>
        </div>
        <div className={`${ theme === "light" ? "w-full h-16 bg-very-light-gray rounded-md flex items-center gap-4 p-4" : "w-full h-16 bg-dark-theme-very-dark-desaturated-blue rounded-md flex items-center gap-4 p-4" }`}>
          <div
            onClick={() => { createNewTask(); }}
            className={`${ theme === "light" ? "w-6 h-6 border-2 rounded-full" : "w-6 h-6 border-2  border-zinc-400  rounded-full" }`}></div>
          <input
            type="text"
            placeholder="Create a new todo..."
            maxLength={35}
            value={newTaskValue}
            onChange={(event) => { setNewTaskValue(event.target.value); }}
            onKeyDown={handleKeyPress}
            className={`${ theme === "light" ? "placeholder:text-very-dark-grayish-blue w-full h-full outline-none text-lg whitespace-nowrap overflow-hidden text-ellipsis bg-transparent" : "placeholder:text-light-theme-very-light-grayish-blue w-full h-full outline-none text-lg whitespace-nowrap overflow-hidden text-ellipsis bg-transparent" }`}
          />
        </div>
      </div>
      <div className={`${theme === "light" ? "w-full flex flex-col shadow-xl shadow-slate-300" : "w-full flex flex-col"}`}>
        <div className="flex flex-col overflow-x-hidden custom-scroll max-h-40">
          {state.map((tasks) => {
            if(statusTaskShow === "all") {
              return <TaskElement
                key={tasks.id}
                completed={tasks.completed}
                id={tasks.id}
                text={tasks.task} />;
            } else if(statusTaskShow === "completed") {
              if(tasks.completed) {
                return <TaskElement
                  key={tasks.id}
                  completed={tasks.completed}
                  id={tasks.id}
                  text={tasks.task} />;
              }
            } else if(statusTaskShow === "active") {
              if(!tasks.completed) {
                return <TaskElement
                  key={tasks.id}
                  completed={tasks.completed}
                  id={tasks.id}
                  text={tasks.task} />;
              }
            }
          })}
        </div>
        <div
          className={`${ theme === "light" ? "w-full bg-very-light-gray rounded-b-md h-16 flex items-center justify-between p-4 text-very-dark-grayish-blue" : "w-full bg-dark-theme-very-dark-desaturated-blue rounded-b-md h-16 flex items-center justify-between p-4 text-dark-grayish-blue" }`}>
          <span
            className={`${ theme === "light" ? "" : "hover:text-very-light-grayish-blue duration-200 cursor-pointer" }`}
          >{state.length} items left</span>
          <div
            className="flex items-center justify-center gap-2"
          >
            <span
              onClick={() => setStatusTaskShow("all")}
              className={`${ statusTaskShow === "all" ? "text-bright-blue cursor-pointer" : "hover:text-very-light-grayish-blue duration-200 cursor-pointer" }`}>All</span>
            <span
              onClick={() => setStatusTaskShow("active")}
              className={`${ statusTaskShow === "active" ? "text-bright-blue cursor-pointer" : "hover:text-very-light-grayish-blue duration-200 cursor-pointer" }`}>Active</span>
            <span
              onClick={() => setStatusTaskShow("completed")}
              className={`${ statusTaskShow === "completed" ? "text-bright-blue cursor-pointer" : "hover:text-very-light-grayish-blue duration-200 cursor-pointer" }`}>Completed</span>
          </div>
          <span
            className={`${ theme === "light" ? "" : "hover:text-very-light-grayish-blue duration-200 cursor-pointer" }`}
          >Clear Tasks</span>
        </div>
      </div>
    </section>
  );
}