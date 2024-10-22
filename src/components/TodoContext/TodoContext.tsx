/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";
import { useState,useReducer,createContext,ReactNode } from "react";

export type State = {
  id: number;
  task: string;
  completed: boolean;
};

type Action =
  | { type: "ADD",payload: string; }
  | { type: "EDIT",payload: number,content: string; }
  | { type: "DONED"; payload: number; }
  | { type: "DEL",payload: number; };

type TodoContextType = {
  state: State[];
  dispatch: React.Dispatch<Action>;
  theme: ThemeValue;
  changeTheme: () => void;
};

type ThemeValue = "light" | "dark";

let initialState: State[] = [
  { id: 0,task: "Estudar React Native",completed: false },
  { id: 1,task: "Criar o Whatsapp 2",completed: false }
];

const reducer = (state: State[],action: Action) => {
  switch(action.type) {
    case "ADD":
      return [
        ...state,
        { id: state.length + 1,task: action.payload,completed: false }
      ];
    case "EDIT":
      return state.map((element) => {
        if(element.id === action.payload) {
          return { ...element,task: action.content };
        } else {
          return element;
        }
      });
    case "DONED":
      return state.map((element) => {
        if(element.id === action.payload) {
          return { ...element,completed: !element.completed };
        } else {
          return element;
        }
      });
    case "DEL":
      return state.filter((element) => element.id !== action.payload);
    default:
      return state;
  }
};

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoComponent({ children }: { children: ReactNode; }) {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [theme,setTheme] = useState<ThemeValue>("light");

  const changeTheme = () => {
    console.log("Ativo");
    setTheme((previousValue) => previousValue === "light" ? "dark" : "light");
  };

  return (
    <TodoContext.Provider value={{ state,dispatch,theme,changeTheme }}>
      {children}
    </TodoContext.Provider>
  );
}