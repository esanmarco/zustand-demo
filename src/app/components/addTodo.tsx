"use client";
import { useState } from "react";
import { useTodoStore } from "../store/useTodos";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useTodoStore();

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="flex flex-row gap-4">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Enter new todo"
        className="flex flex-1 input input-bordered"
      />
      <button
        onClick={handleAddTodo}
        className="capitalize rounded btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}
