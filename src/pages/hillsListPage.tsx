import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import ClassificationRadial from "../components/classificationRadial";
import { useHillsStore } from "../hillsStore";

import HillsTable from "../components/hillsTable";
import HillsTableDescription from "../components/hillsTabelDiscription";

export default function HillsListPage() {
  const UpdateList = useHillsStore().updateList;

  const setSearchString = useHillsStore().setSearchString;
  const setPagination = useHillsStore().setPagination;

  const countHills = useHillsStore((state) => state.countHills);

  const handleTablePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination(value - 1);
  };

  useEffect(() => {
    UpdateList();
  }, []);

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
              fullWidth
              label="Search Hills"
              onChange={(input) => {
                setSearchString(input.target.value);
              }}
            />
          </div>
          <HillsTable />
          <div className="flex justify-center pb-10">
            <Pagination
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
