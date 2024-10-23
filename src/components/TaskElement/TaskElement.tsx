/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useContext,useRef,useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { FaCheck } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

type Props = {
  completed: boolean;
  id: number;
  text: string;
};

export default function TaskElement({ completed,id,text }: Props) {
  const { state,theme,dispatch } = useContext(TodoContext)!;
  const [taskValue,setTaskValue] = useState<string>("");
  const taskDiv = useRef<HTMLDivElement | null>(null);
  const editTaskDiv = useRef<HTMLDivElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);

  const showEditSection = () => {
    taskDiv.current!.style.display = "none";
    editTaskDiv.current!.style.display = "flex";
    input.current!.focus();
    setTaskValue("");
  };

  const hideEditSection = () => {
    taskDiv.current!.style.display = "flex";
    editTaskDiv.current!.style.display = "none";
  };

  const editTask = () => {
    if(taskValue.trim()) {
      dispatch({ type: "EDIT",payload: id,content: taskValue });
      if(completed) dispatch({ type: "DONED",payload: id });
    }
  };

  const handleEditTask = (event: React.KeyboardEvent) => {
    if(event.key == "Enter") {
      hideEditSection();
      editTask();
    }
  };

  return (
    <article className="w-full h-14 p-4 bg-very-light-gray first-of-type:rounded-t-md grid-rows-2 gap-2 place-items-center border-x-0 border-y-[1px] first-of-type:border-t-0 last-of-type:border-b-0 last-of-type:rounded-b-md border-y-slate-400">
      <div
        ref={taskDiv}
        className="w-full h-full flex items-center justify-between">
        <div className="h-full flex items-center justify-center gap-5 whitespace-nowrap overflow-hidden text-ellipsis ">
          <button onClick={() => { dispatch({ type: "DONED",payload: id }); }}>
            {completed ?
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-gradient-to-r from-sky-500 to-purple-400">
                <FaCheck />
              </div> :
              <div className="w-6 h-6 border-2 rounded-full"></div>}
          </button>
          <div className={completed ? "w-[80%] h-full whitespace-nowrap overflow-hidden text-ellipsis text-dark-grayish-blue" : "w-[80%] h-full whitespace-nowrap overflow-hidden text-ellipsis text-very-dark-grayish-blue"}>
            <p
              onClick={() => showEditSection()}
              className={completed ? "line-through" : ""}>{text}</p>
          </div>
        </div>
        <button
          onClick={() => dispatch({ type: "DEL",payload: id })}
          className="text-xl cursor-pointer">
          <GoTrash />
        </button>
      </div>
      <div
        ref={editTaskDiv}
        className="w-full hidden items-center justify-between gap-4"
      >
        <input
          type="text"
          ref={input}
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value)}
          onKeyDown={handleEditTask}
          maxLength={35}
          className="w-full border-t-0 border-x-0 border-b-2 border-b-slate-400 outline-none whitespace-nowrap overflow-hidden text-ellipsis "
        />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => {
              hideEditSection();
              editTask();
            }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-green-600">
            <FaCheck />
          </button>
          <button
            onClick={() => {
              hideEditSection();
            }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-600 text-2xl font-medium">x</button>
        </div>
      </div>
    </article>
  );
}