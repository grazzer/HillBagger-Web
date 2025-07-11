import { createFileRoute } from "@tanstack/react-router";
import HillsListPage from "../pages/hillsListPage";
import * as z from "zod";
import { getHillsNew } from "../services/hillsApi";
import LoadingPage from "../pages/loadingPage";

const searchParametersSchema = z.object({
  classification: z.string().catch("all"),
  pagination: z.number().catch(0),
  direction: z.string().optional(),
  searchString: z.string().optional(),
  selectedIndex: z.number().optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: searchParametersSchema,
  loaderDeps: ({
    search: { classification, pagination, direction, searchString },
  }) => ({
    classification,
    pagination,
    direction,
    searchString,
  }),
  // loader: async ({
  //   deps: { classification, pagination, direction, searchString },
  // }) => await getHillsNew(classification, pagination, direction, searchString),

  loader: async ({
    deps: { classification, pagination, direction, searchString },
  }) => await getHillsNew(classification, pagination, direction, searchString),

  // throw new Error("cannot find data");
  // shouldReload: false, // maybe needed?
  component: RouteComponent,
  pendingComponent: () => <LoadingPage />,
});

function RouteComponent() {
  document.body.querySelector("#main-scrollable-area")?.scroll(0, 0);
  return <HillsListPage />;
}
