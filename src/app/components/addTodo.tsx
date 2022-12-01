// TODOs
// 1. Handle input state internally
// 2. Handle add to do action to store

export default function AddTodo() {
  return (
    <div className="flex flex-row gap-4">
      <input
        type="text"
        placeholder="Enter new todo"
        className="flex flex-1 input input-bordered"
      />
      <button className="capitalize rounded btn btn-primary">Add</button>
    </div>
  );
}
