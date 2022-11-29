"use client";
import React from "react";
import { useTodoStore } from "../../stores/todo";

export default function AddTodo() {
  const { addTodo, newTodo, updateNewTodo } = useTodoStore();

  const handleSubmit = () => {
    if (newTodo.length > 0) {
      addTodo();
    }
  };
  return (
    <div className="flex flex-row gap-4">
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateNewTodo(e.target.value)
        }
        className="input input-bordered flex flex-1"
      />
      <button
        onClick={handleSubmit}
        className="btn btn-primary rounded capitalize"
      >
        Add
      </button>
    </div>
  );
}
