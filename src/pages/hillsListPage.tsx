import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import RowRadioButtonsGroup from "../components/classificationRadial";

import { getHills } from "../services/hillsApi";
import HillsTable from "../components/hillsTable";
import HillsTableDescription from "../components/hillsTabelDiscription";

export default function HillsListPage() {
  const [searchString, setSearchString] = useState<string>("");
  const [selectedClassification, setSelectedClassification] =
    useState<string>("all");
  const [selectedDirection, setSelectedDirection] = useState<string>("n1");
  const [pagination, setPagination] = useState<number>(0);
  const [hills, setHills] = useState<any[]>([]);
  const [countHills, setCountHills] = useState<number>(1);

  async function UpdateList() {
    const query = CreateQuery();
    const [resHills, resCount] = await getHills(query);
    setCountHills(resCount);
    setHills(resHills);
  }
  function CreateQuery() {
    let _query =
      "/" +
      selectedClassification +
      "?" +
      "p=" +
      pagination.toString() +
      "&d=" +
      selectedDirection;
    if (searchString != "") {
      _query = _query + "&s=" + searchString;
    }
    return _query;
  }
  const handleTablePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination((value - 1) * 20);
  };

  useEffect(() => {
    UpdateList();
  }, [searchString, selectedClassification, selectedDirection, pagination]);

  return (
    //screen
    <div className="h-full flex flex-col bg-gray-10">
      {/* temp Top Bar */}
      <div className="flex basis-16 bg-red-200"> </div>
      {/* classification selector  */}
      <div className="flex justify-center pt-10">
        <RowRadioButtonsGroup
          setterFunction={setSelectedClassification}
          currentSelection={selectedClassification}
        />
      </div>
      {/* table container */}
      <div className="flex flex-row">
        {/* sidebar */}
        <div className="flex xl:basis-1/12 " />
        {/* Hills Table  */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col px-5">
            <HillsTableDescription
              selectedClassification={selectedClassification}
            />
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
          <HillsTable
            selectedDirection={selectedDirection}
            setSelectedDirection={setSelectedDirection}
            hills={hills}
          />
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
