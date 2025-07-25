import { Link, useNavigate } from "@tanstack/react-router";
import logo from "../../assets/logo.png";
import { Fade as Hamburger } from "hamburger-react";
import { useStore } from "../../Store";
import { useEffect } from "react";

const linkClass = "";

const activeProps = {
  className: "text-white font-semibold",
};
const activePropsBurger = {
  className: "text-main font-semibold",
};

const linksArray = [
  { to: "/", label: "hills", key: "hills" },
  {
    to: "/about",
    label: "about",
    key: "about",
  },
  {
    to: "/profile",
    label: "profile",
    key: "profile",
  },
  {
    to: "/settings",
    label: "settings",
    key: "settings",
  },
];

export function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      to: "/",
    });
  }

  const { burgerMenuOpen, setBurgerMenuOpen } = useStore();
  useEffect(() => {
    setBurgerMenuOpen(false);
  }, []);

  const JsxArray = linksArray.map((e) => (
    <li key={e.key}>
      <Link activeProps={activeProps} className={linkClass} to={e.to}>
        {e.label}
      </Link>
    </li>
  ));

  const JsxBurgerArray = linksArray.map((e) => (
    <li key={e.key}>
      <Link activeProps={activePropsBurger} className={linkClass} to={e.to}>
        <button onClick={() => setBurgerMenuOpen(false)}>{e.label}</button>
      </Link>
    </li>
  ));

  return (
    <>
      <header className="top-0 left-0 z-10">
        <div className="flex flex-row h-15  bg-main">
          <img
            onClick={() => handleClick()}
            className="p-1.5 pr-4"
            src={logo}
            alt="Logo"
          />
          {/* // hamburger menu */}
          <div className="md:hidden flex w-full pr-5 items-center justify-end">
            <Hamburger
              toggled={burgerMenuOpen}
              toggle={() => setBurgerMenuOpen(!burgerMenuOpen)}
              size={22}
            />
          </div>
          {/* // row menu */}
          <div className="hidden md:flex w-full pr-5 items-center justify-items-start">
            <div className="p-4" />
            <ul className="flex flex-row space-x-8">{JsxArray}</ul>{" "}
          </div>
        </div>
      </header>
      {/* // hamburger menu open */}
      {burgerMenuOpen && (
        <header className="fixed top-0 left-0 h-screen w-screen z-10 bg-white">
          <div className="pr-4 flex-col">
            <div className="flex w-full pr-5 pt-1 items-center justify-end">
              <Hamburger
                toggled={burgerMenuOpen}
                toggle={() => setBurgerMenuOpen(!burgerMenuOpen)}
                size={22}
              />
            </div>
            <ul className="flex flex-col items-end pr-10 space-y-4 mt-4">
              {JsxBurgerArray}
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
