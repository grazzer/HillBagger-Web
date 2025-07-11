import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Header } from "../components/pageLayouts/header";
import ErrorPage from "../pages/errorPage";
import notFoundPage from "../pages/notFoundPage";
import { useStore } from "../Store";

type RouterContext = {
  hills: [];
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: notFoundPage,
  // errorComponent: errorPage,
  errorComponent: ({ error }) => {
    return <ErrorPage name={error.name} message={error.message} />;
    return <p> {error.message}</p>;
  },
});

// console.log(document.getElementById("main-scrollable-area"));
console.log(document.body.querySelector("#main-scrollable-area"));

function RootComponent() {
  const burgerMenuOpen = useStore();
  return (
    <React.Fragment>
      <div
        id={"main-scrollable-area"}
        onScroll={() => {
          console.log("scroll");
        }}
        className={
          burgerMenuOpen ? "h-screen overflow-auto" : "h-screen overflow-hidden"
        }
      >
        <Header />
        <Outlet />
      </div>
    </React.Fragment>
  );
}
