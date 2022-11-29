import AddTodo from "./components/addTodo";
import Todos from "./todos";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mb-10">Todo List</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}
