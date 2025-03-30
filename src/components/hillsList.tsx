import { useState, useEffect } from "react";
import { getHills } from "../services/hillsApi";

export default function HillsList({ query }: { query: string }) {
  const [hills, setHills] = useState([]);

  async function UpdateList() {
    const res = await getHills(query);
    setHills(res);
  }

  useEffect(() => {
    UpdateList();
  }, [query]);

  return hills.map((hill: any) => (
    <tr key={hill.Number} className="bg-white drop-shadow-lg">
      <td className="rounded-s-xl "></td>
      <td className="py-4">{hill.Number}</td>
      <td className="">{hill.Name}</td>
      <td className="m-auto ">
        <img
          className="ml-3 w-8  md:w-10 border border-solid border-gray-400"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png"
          alt="Scottish Flag"
        />
      </td>
      <td className="hidden sm:table-cell">{hill.County}</td>
      <td>{hill.Metres}</td>
      <td className="hidden lg:table-cell">{hill.Classification}</td>
      <td className="hidden lg:table-cell">01/05/2021</td>
      <td className="text-center lg:hidden">0</td>
      <td className="rounded-e-xl "></td>
    </tr>
  ));
}
