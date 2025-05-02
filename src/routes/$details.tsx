import { createFileRoute } from "@tanstack/react-router";
import DetailsPage from "../pages/detailsPage";

export const Route = createFileRoute("/$details")({
  component: RouteComponent,
});

function RouteComponent() {
  const { details } = Route.useParams();
  return (
    <div>
      {details}
      <DetailsPage />
    </div>
  );
}
