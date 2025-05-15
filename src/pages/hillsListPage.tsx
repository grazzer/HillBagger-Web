import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import ClassificationRadial from "../components/classificationRadial";
// import { useHillsStore } from "../hillsStore";

import HillsTable from "../components/hillsTable";
import HillsTableDescription from "../components/hillsTabelDiscription";
import { getRouteApi, useNavigate, useSearch } from "@tanstack/react-router";

export default function HillsListPage() {
  const { searchString, pagination } = useSearch({
    from: "/",
  });
  const navigate = useNavigate({ from: "/" });

  const routeApi = getRouteApi("/");
  const data = getRouteApi("/").useLoaderData();
  const hills = data[0];
  const countHills = data[1];

  const handleTablePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate({ search: () => ({ pagination: value - 1 }) });
  };

  return (
    //screen
    <div className="h-full flex flex-col bg-gray-10">
      {/* temp Top Bar */}
      <div className="flex basis-16 bg-red-200"> </div>
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
            <TextField
              value={searchString}
              fullWidth
              label="Search Hills"
              onChange={(input) => {
                navigate({
                  search: () => ({ searchString: input.target.value }),
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
    </div>
  );
}
