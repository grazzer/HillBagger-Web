import { useState, useEffect } from "react";
import HillsList from "../components/hillsList";
import { getHills } from "../services/hillsApi";

export default function HillsListPage() {
  const [searchString, setSearchString] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("munro");
  const [selectedDirection, setSelectedDirection] = useState("n1");
  const [pagination, setPagination] = useState(0);

  const [hills, setHills] = useState([]);

  async function UpdateList() {
    const query = CreateQuery();
    const res = await getHills(query);
    setHills(res);
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
  //set test prams
  // useEffect(() => {
  //   setSelectedClassification("munro");
  //   setSearchString("More");
  //   setSelectedDirection("n-1");
  //   setPagination(1);
  // }, []);

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
          </div>
          <table
            className=" p-2 w-full text-left table-auto 
                                text-slate-800 rounded border-separate 
                                border-spacing-y-4"
          >
            <thead>
              <tr className="">
                <th className="p-1 lg:p-3 "></th>
                <th>No.</th>
                <th>Name</th>
                <th className="">Country</th>
                <th className="hidden sm:inline">County</th>
                <th>Height</th>
                <th className="hidden lg:inline">Classification</th>
                <th>Bagged</th>
                <th className="p-1 lg:p-3"></th>
              </tr>
            </thead>
            <tbody>
              <HillsList hills={hills}></HillsList>
            </tbody>
          </table>
        </div>
        <div className="flex xl:basis-1/12 " />
      </div>
    </div>
  );
}
