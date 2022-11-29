import create from "zustand";

interface Store {
  newTodo: string;
  todos: string[];

  updateNewTodo: (newTodo: string) => void;
  addTodo: () => void;
  removeTodo: (index: number) => void;
}

export const useTodoStore = create<Store>((set) => ({
  newTodo: "",
  todos: [],

  updateNewTodo: (newTodo: string) => set({ newTodo }),
  addTodo: () =>
    set((state) => ({ todos: [...state.todos, state.newTodo], newTodo: "" })),
  removeTodo: (index: number) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
}));
