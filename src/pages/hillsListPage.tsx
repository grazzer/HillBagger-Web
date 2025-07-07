import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import ClassificationRadial from "../components/classificationRadial";
// import { useHillsStore } from "../hillsStore";

import HillsTable from "../components/hillsTable";
import HillsTableDescription from "../components/hillsTabelDiscription";
import { getRouteApi, useNavigate, useSearch } from "@tanstack/react-router";
import { Layout_Basic } from "../components/pageLayouts/layout_basic";
import type { hill } from "../types/hill";

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
    console.log(event);
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
      {/* classification selector  */}
      <div className="flex justify-center pt-10">
        <ClassificationRadial />
      </div>
      {/* table container */}
      <div className="flex flex-row">
        {/* sidebar */}
        <div className="flex xl:basis-1/12 " />
        {/* Hills Table  */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col px-5">
            <HillsTableDescription />
          </div>
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
        {/* sidebar */}
        <div className="flex xl:basis-1/12 " />
      </div>
    </Layout_Basic>
  );
}
