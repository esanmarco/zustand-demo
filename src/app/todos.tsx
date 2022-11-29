"use client";
import { useTodoStore } from "../stores/todo";

export default function Todos() {
  const { todos, removeTodo } = useTodoStore();

  if (todos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 mt-8">
      {todos.map((todo, index: number) => (
        <div
          key={index}
          className="card rounded-sm p-4 pl-6 bg-base-300 shadow-md flex flex-row justify-between items-center"
        >
          <div className="flex flex-row gap-4 items-center">
            <p className="m-0 flex flex-row gap-4">
              <span className="text-lg font-bold">{index + 1}.</span> {todo}
            </p>
          </div>

          <button
            onClick={() => removeTodo(index)}
            className="btn rounded-full btn-ghost btn-sm p-1 w-8 h-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
