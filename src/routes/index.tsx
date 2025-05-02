import { createFileRoute } from "@tanstack/react-router";
import HillsListPage from "../pages/hillsListPage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div id="root">
      <HillsListPage />
    </div>
  );
}
