import { Dispatch, SetStateAction } from "react";
import {
  LuArrowDown01,
  LuArrowUp10,
  LuArrowDownAZ,
  LuArrowUpZA,
} from "react-icons/lu";
import HillsList from "../components/hillsList";

export default function HillsTable({
  selectedDirection,
  setSelectedDirection,
  hills,
}: {
  selectedDirection: string;
  setSelectedDirection: Dispatch<SetStateAction<string>>;
  hills: any[];
}) {
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

  return (
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
  );
}
