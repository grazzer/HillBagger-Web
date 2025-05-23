import { getRouteApi, useNavigate } from "@tanstack/react-router";

export default function HillsTableRows() {
  const data = getRouteApi("/").useLoaderData();
  const hills = data[0];
  const countHills = data[1];

  const navigate = useNavigate();

  function handleClick(selected: number, name: string) {
    navigate({
      from: "/",
      to: "/$details",
      params: { details: "name" },
      search: () => ({ selectedIndex: selected }),
    });
  }
  if (hills[0] == null) {
    return (
      <tr>
        <td>
          <p> Cannot find any hills </p>
        </td>
      </tr>
    );
  }
  return hills.map((hill: any, index: number) => (
    <tr
      key={hill.Number}
      className="bg-white drop-shadow-lg hover:bg-gray-300"
      onClick={() => handleClick(index, hill.Name)}
    >
      <td className="rounded-s-xl "></td>
      <td className="py-4 pr-1">{hill.Number}</td>
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
