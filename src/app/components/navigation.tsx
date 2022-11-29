import ThemeSwitcher from "./themeSwitcher";

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 border-b border-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Zustand Demo</a>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
