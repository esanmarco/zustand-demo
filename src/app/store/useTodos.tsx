import create from "zustand";

interface TodoStore {
  todos: string[];
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
}

export const useTodoStore = create<any>((set: any) => ({
  todos: [],
  addTodo: (todo: string) =>
    set((state: any) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (index: number) => {
    set((state: any) => {
      const todos = [...state.todos];
      todos.splice(index, 1);
      return { todos };
    });
  },
}));
