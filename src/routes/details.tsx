import { createFileRoute, retainSearchParams } from "@tanstack/react-router";
import DetailsPage from "../pages/detailsPage";
import * as z from "zod";
import { getHillsNew } from "../services/hillsApi";
import LoadingPage from "../pages/loadingPage";

const searchParametersSchema = z.object({
  classification: z.string().catch("all"),
  pagination: z.number().catch(0),
  direction: z.string().optional(),
  searchString: z.string().optional(),
  selectedIndex: z.number().catch(0),
});

export const Route = createFileRoute("/details")({
  validateSearch: searchParametersSchema,
  search: {
    middlewares: [
      retainSearchParams([
        "classification",
        "pagination",
        "direction",
        "searchString",
        "selectedIndex",
      ]),
    ],
  },
  loaderDeps: ({
    search: { classification, pagination, direction, searchString },
  }) => ({
    classification,
    pagination,
    direction,
    searchString,
  }),
  loader: async ({
    deps: { classification, pagination, direction, searchString },
  }) => await getHillsNew(classification, pagination, direction, searchString),
  component: RouteComponent,
  pendingComponent: () => <LoadingPage />,
});

function RouteComponent() {
  document.body.querySelector("#main-scrollable-area")?.scroll(0, 0);
  return <DetailsPage />;
}
