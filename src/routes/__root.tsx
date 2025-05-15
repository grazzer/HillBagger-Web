import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

type RouterContext = {
  hills: [];
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
