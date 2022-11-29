export default function AddTodo() {
  return (
    <div className="flex flex-row gap-4">
      <input
        type="text"
        placeholder="Enter new todo"
        className="input input-bordered flex flex-1"
      />
      <button className="btn btn-primary rounded capitalize">Add</button>
    </div>
  );
}
