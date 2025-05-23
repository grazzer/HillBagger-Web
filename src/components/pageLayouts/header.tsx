import { Link } from "@tanstack/react-router";

const linkclass = "p-5";

export function Header() {
  return (
    <div className="flex flex-row h-15 bg-main">
      <p className="text-4xl p-1.5 pr-4">Hill Bagging</p>
      <div className="flex items-center">
        <Link className={linkclass} to={"/"}>
          hills
        </Link>
        <Link className={linkclass} to={"/"}>
          about
        </Link>
        <Link className={linkclass} to={"/"}>
          profile
        </Link>
        <Link className={linkclass} to={"/"}>
          settings
        </Link>
      </div>
    </div>
  );
}
