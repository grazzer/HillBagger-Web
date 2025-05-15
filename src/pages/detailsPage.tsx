import { getRouteApi, useLoaderData, useSearch } from "@tanstack/react-router";
import { Layout_Basic } from "../components/pageLayouts/layout_basic";

function Box({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="pb-5">
      <p className="pb-1">{title}</p>
      <div className="flex justify-around flex-col rounded-xl border border-gray-300 py-3 pl-5">
        {children}
      </div>
    </div>
  );
}

function Row({ title, data }: { title?: string; data?: string }) {
  return (
    <div className="flex flex-row py-1">
      {title ? <p className="w-30">{title}</p> : null}
      <p className="">{data}</p>
    </div>
  );
}
export default function DetailsPage() {
  // const navigate = useNavigate({ from: "/" });
  const data = useLoaderData({ from: "/$details" });
  const hills = data[0];
  const countHills = data[1];

  const { selectedIndex } = useSearch({
    from: "/$details",
  });
  const selectedHill = hills[selectedIndex];
  console.log(selectedHill);

  return (
    <Layout_Basic>
      <div className="pb-10">
        <p className="text-4xl">{selectedHill.Name}</p>
        <p className="text-xl"># {selectedHill.Number}</p>
      </div>
      <Box title="Height">
        <Row
          title={"Height:"}
          data={selectedHill.Metres + "m | " + selectedHill.Feet + "ft"}
        />
        <Row title={"Drop:"} data={selectedHill.Drop} />
        <Row title={"Top:"} data={selectedHill.County_Top} />
      </Box>
      <Box title="Classification">
        <Row data={selectedHill.Classification} />
      </Box>
      <Box title="Area">
        <Row title={"Area:"} data={selectedHill.Area} />
        <Row title={"col grid ref:"} data={selectedHill.Col_grid_ref} />
        <Row title={"col height:"} data={selectedHill.Col_height} />
        <Row title={"country:"} data={selectedHill.Country} />
        <Row title={"county:"} data={selectedHill.County} />
        <Row title={"geography:"} data={selectedHill.Geography} />
        <Row title={"grid ref:"} data={selectedHill.Grid_ref} />
        <Row title={"grid ref 10:"} data={selectedHill.Grid_ref_10} />
        <Row title={"grid ref XY:"} data={selectedHill.gridrefXY} />
        <Row title={"island:"} data={selectedHill.Island} />
        <Row title={"long:"} data={selectedHill.Longitude} />
        <Row title={"lat:"} data={selectedHill.Latitude} />
        <Row title={"parent ma:"} data={selectedHill.Parent_Ma} />
        <Row title={"parent smc:"} data={selectedHill.Parent_SMC} />
        <Row title={"region:"} data={selectedHill.Region} />
        <Row title={"topo section:"} data={selectedHill.Topo_Section} />
        <Row title={"section int:"} data={selectedHill.Section_int} />
        <Row title={"survey:"} data={selectedHill.Survey} />
        <Row title={"x cords:"} data={selectedHill.Xcoord} />
        <Row title={"y cords:"} data={selectedHill.Ycoord} />
        <Row title={"observations:"} data={selectedHill.Observations} />
      </Box>
      <Box title="Top">
        <Row title={"Summit Feature:"} data={selectedHill.Feature} />
      </Box>
      <Box title="Map">
        <Row data={"Map"} />
      </Box>
      <Box title="Bagged">
        <Row data={"Record"} />
      </Box>
      <Box title="wether">
        <Row data={"weather"} />
      </Box>
      <Box title="Photos">
        <Row data={"Photos"} />
      </Box>
      <Box title="History/Meaning ">
        <Row data={"maybe"} />
      </Box>
      <Box title="Comments">
        <Row data={"User Comments"} />
      </Box>
    </Layout_Basic>
  );
}

// <div className="flex-1 xl:basis-10/12 xl:rounded-xl my-1 p-5 bg-white ">
