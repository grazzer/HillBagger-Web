import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import HillsTable from "../components/hillsTable";
import HillsTableDescription from "../components/hillsTabelDiscription";
import { getRouteApi, useNavigate, useSearch } from "@tanstack/react-router";
import { Layout_Basic } from "../components/pageLayouts/layout_basic";
import type { hill } from "../types/hill";
import ClassificationSelector from "../components/hillsListPage/classificationSelector";

export default function HillsListPage() {
  const { searchString, pagination } = useSearch({
    from: "/",
  });
  const navigate = useNavigate({ from: "/" });

  const data: [[hill], number] = getRouteApi("/").useLoaderData();
  const countHills = data[1];

  const handleTablePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event;
    document.body.querySelector("#table-scrollable-area")?.scrollIntoView();
    navigate({
      search: (prev) => ({
        classification: prev.classification,
        pagination: value - 1,
        direction: prev.direction,
        searchString: prev.searchString,
      }),
    });
  };
  return (
    //screen
    <Layout_Basic>
      <div className="flex justify-center md:pt-10">
        <ClassificationSelector />
      </div>
      {/* table container */}
      <div className="flex flex-row">
        {/* Hills Table  */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col md:px-5">
            <HillsTableDescription />
          </div>
          <div id="table-scrollable-area">
            <div className="pt-10">
              {/* TODO: text input lag when OR operator used */}
              <TextField
                // value={searchString || ""}
                value={searchString}
                fullWidth
                label="Search Hills"
                onChange={(input) => {
                  navigate({
                    search: (prev) => ({
                      classification: prev.classification,
                      direction: prev.direction,
                      searchString: input.target.value,
                    }),
                  });
                }}
              />
            </div>
            <HillsTable />
            <div className="flex justify-center pb-10">
              <Pagination
                page={pagination + 1}
                count={Math.floor(countHills / 20) + 1}
                onChange={handleTablePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout_Basic>
  );
}
