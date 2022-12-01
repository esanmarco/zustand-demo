import AddTodo from "./components/addTodo";
import Todos from "./todos";

export default function Home() {
  return (
    <div>
      <h1 className="my-10 text-center">Todo List</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}
