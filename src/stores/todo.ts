import create from "zustand";

interface Store {
  todos: string[];

  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
}

export const useTodoStore = create<Store>((set) => ({
  todos: [],

  addTodo: (newToDo: string) =>
    set((state) => ({ todos: [...state.todos, newToDo] })),
  removeTodo: (index: number) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
}));
