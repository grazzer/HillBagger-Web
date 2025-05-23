import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Header } from "../components/pageLayouts/header";
import ErrorPage from "../pages/errorPage";
import notFoundPage from "../pages/notFoundPage";

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

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}
