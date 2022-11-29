import AddTodo from "./components/addTodo";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mb-10">Todo List</h1>

      <AddTodo />
    </div>
  );
}
