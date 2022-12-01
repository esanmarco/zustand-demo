// Todos
// 1. Use store to pull in todos
// 2. Handle delete action to store
const todos: string[] = [];

export default function TodosList() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {todos.map((todo: string, index: number) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between p-4 pl-6 rounded-sm shadow-md card bg-base-300"
        >
          <div className="flex flex-row items-center gap-4">
            <p className="flex flex-row gap-4 m-0">
              <span className="text-lg font-bold">{index + 1}.</span> {todo}
            </p>
          </div>

          <button className="w-8 h-8 p-1 rounded-full btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
