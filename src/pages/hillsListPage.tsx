import { useState, useEffect } from "react";
import HillsList from "../components/hillsList";
import { getHills } from "../services/hillsApi";
import {
  LuArrowDown01,
  LuArrowUp10,
  LuArrowDownAZ,
  LuArrowUpZA,
} from "react-icons/lu";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

export default function HillsListPage() {
  const [searchString, setSearchString] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("all");
  const [selectedDirection, setSelectedDirection] = useState("n1");
  const [pagination, setPagination] = useState(0);
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
  function toggleNum() {
    if (selectedDirection == "n1") {
      setSelectedDirection("n-1");
    }
    if (selectedDirection == "n-1") {
      setSelectedDirection("n1");
    } else {
      setSelectedDirection("n-1");
    }
  }
  function toggleName() {
    if (selectedDirection == "a1") {
      setSelectedDirection("a-1");
    }
    if (selectedDirection == "a-1") {
      setSelectedDirection("a1");
    } else {
      setSelectedDirection("a-1");
    }
  }
  function toggleCountry() {
    if (selectedDirection == "c1") {
      setSelectedDirection("c-1");
    }
    if (selectedDirection == "c-1") {
      setSelectedDirection("c1");
    } else {
      setSelectedDirection("c-1");
    }
  }
  function toggleCounty() {
    if (selectedDirection == "l1") {
      setSelectedDirection("l-1");
    }
    if (selectedDirection == "l-1") {
      setSelectedDirection("l1");
    } else {
      setSelectedDirection("l-1");
    }
  }
  function toggleHeight() {
    if (selectedDirection == "h1") {
      setSelectedDirection("h-1");
    }
    if (selectedDirection == "h-1") {
      setSelectedDirection("h1");
    } else {
      setSelectedDirection("h-1");
    }
  }
  function toggleClass() {
    if (selectedDirection == "t1") {
      setSelectedDirection("t-1");
    }
    if (selectedDirection == "t-1") {
      setSelectedDirection("t1");
    } else {
      setSelectedDirection("t-1");
    }
  }
  function toggleBagged() {
    // TODO:
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
    // h-screen items-center justify-center
    <div className="h-full flex flex-col bg-gray-10">
      <div className="flex basis-16 bg-red-200"> </div>
      <div className="flex flex-row">
        <div className="flex xl:basis-1/12 " />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col px-5">
            <h1 className="flex py-5 text-4xl">Munro's</h1>
            <p className="py-2">
              This page shows a list of all the Munros - which is a mountain in
              Scotland over 3000 feet high - or 914m. The list was first
              compiled by Sir Hugh Munro in 1891, and has been updated at
              various times since. There are 282 Munros and 226 Munro Tops.
            </p>
            <p className="py-2">
              Click on the each mountain to view details, hiking routes, maps
              and photos. Create an account to add logs and track your progress.
            </p>
            <div className="pt-10">
              <TextField
                fullWidth
                label="Search Hills"
                onChange={(input) => {
                  setSearchString(input.target.value);
                }}
              />
            </div>
          </div>
          <table
            className=" p-2 w-full text-left table-auto 
                                text-slate-800 rounded border-separate 
                                border-spacing-y-4"
          >
            <thead>
              <tr>
                <th className="p-1 lg:p-3 "></th>
                <th className="flex flex-row">
                  <button className="flex flex-row" onClick={toggleNum}>
                    No.
                    <div>
                      {selectedDirection == "n1" && <LuArrowDown01 />}
                      {selectedDirection == "n-1" && <LuArrowUp10 />}
                    </div>
                  </button>
                </th>
                <th>
                  <button className="flex flex-row" onClick={toggleName}>
                    Name
                    <div>
                      {selectedDirection == "a1" && <LuArrowDownAZ />}
                      {selectedDirection == "a-1" && <LuArrowUpZA />}
                    </div>
                  </button>
                </th>
                <th>
                  <button className="flex flex-row" onClick={toggleCountry}>
                    Country
                    <div>
                      {selectedDirection == "c1" && <LuArrowDownAZ />}
                      {selectedDirection == "c-1" && <LuArrowUpZA />}
                    </div>
                  </button>
                </th>
                <th className="hidden sm:inline">
                  <button className="flex flex-row" onClick={toggleCounty}>
                    County
                    <div>
                      {selectedDirection == "l1" && <LuArrowDownAZ />}
                      {selectedDirection == "l-1" && <LuArrowUpZA />}
                    </div>
                  </button>
                </th>
                <th>
                  <button className="flex flex-row" onClick={toggleHeight}>
                    Height
                    <div>
                      {selectedDirection == "h1" && <LuArrowDown01 />}
                      {selectedDirection == "h-1" && <LuArrowUp10 />}
                    </div>
                  </button>
                </th>
                <th className="hidden lg:inline">
                  <button className="flex flex-row" onClick={toggleClass}>
                    Classification
                    <div>
                      {selectedDirection == "t1" && <LuArrowDownAZ />}
                      {selectedDirection == "t-1" && <LuArrowUpZA />}
                    </div>
                  </button>
                </th>
                <th>
                  <button className="flex flex-row" onClick={toggleBagged}>
                    Bagged
                    <div>
                      {/* TODO: */}
                      {selectedDirection == "bagged" && <LuArrowDown01 />}
                      {selectedDirection == "bagged" && <LuArrowUp10 />}
                    </div>
                  </button>
                </th>
                <th className="p-1 lg:p-3"></th>
              </tr>
            </thead>
            <tbody>
              <HillsList hills={hills}></HillsList>
            </tbody>
          </table>
          <div className="flex justify-center pb-10">
            <Pagination
              count={Math.floor(countHills / 20) + 1}
              onChange={handleTablePageChange}
            />
          </div>
        </div>
        <div className="flex xl:basis-1/12 " />
      </div>
    </div>
  );
}
