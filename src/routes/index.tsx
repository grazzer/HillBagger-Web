import {
  createFileRoute,
  retainSearchParams,
  useNavigate,
} from "@tanstack/react-router";
import HillsListPage from "../pages/hillsListPage";
import * as z from "zod";
import { getHillsNew } from "../services/hillsApi";
import { useContext } from "react";

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
  loader: async ({
    deps: { classification, pagination, direction, searchString },
  }) => await getHillsNew(classification, pagination, direction, searchString),
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = Route.useNavigate();

  // const updateFilters = (name: keyof ItemFilters, value: unknown) => {
  //   navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  // };

  console.log(Route);
  return (
    <div id="root">
      <HillsListPage />
    </div>
  );
}
