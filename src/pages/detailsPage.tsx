import { Layout_Basic } from "../components/pageLayouts/layout_basic";
import { useHillsStore } from "../hillsStore";

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
  const hills = useHillsStore((state) => state.hillsList);
  const selectedIndex = useHillsStore((state) => state.selectedHillIndex);
  const setSelectedIndex = useHillsStore((state) => state.setSelectedHillIndex);
  // const pagination = useHillsStore((state) => state.pagination);
  const setPagination = useHillsStore((state) => state.setPagination);

  const selectedHill = hills[selectedIndex];
  return (
    <Layout_Basic>
      <div className="pb-10">
        <p className="text-4xl">Ben Nevis [Beinn Nibheis]</p>
        <p className="text-xl"># 278</p>
      </div>
      <Box title="Height">
        <Row title={"Height:"} data={"400m | 1200ft"} />
        <Row title={"Drop:"} data={"1344.5m"} />
        <Row
          title={"Top:"}
          data={
            "Scotland, Highland (UA), Inverness-shire (CoH), Highland (CoA)"
          }
        />
      </Box>
      <Box title="Classification">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="Area">
        <Row title={"Area:"} data={"null"} />
        <Row title={"col grid ref:"} data={"Sea"} />
        <Row title={"col height:"} data={"0"} />
        <Row title={"country:"} data={"s"} />
        <Row title={"county:"} data={"null"} />
        <Row title={"geography:"} data={"null"} />
        <Row title={"grid ref:"} data={"null"} />
        <Row title={"grid ref 10:"} data={"null"} />
        <Row title={"grid ref XY:"} data={"null"} />
        <Row title={"island:"} data={"null"} />
        <Row title={"long:"} data={"null"} />
        <Row title={"lat:"} data={"null"} />
        <Row title={"parent ma:"} data={"null"} />
        <Row title={"parent smc:"} data={"null"} />
        <Row title={"region:"} data={"null"} />
        <Row title={"section:"} data={"null"} />
        <Row title={"survey:"} data={"null"} />
        <Row title={"x cords:"} data={"null"} />
        <Row title={"y cords:"} data={"null"} />
        <Row title={"opposition:"} data={"null"} />
      </Box>
      <Box title="Top">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="Map">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="Bagged">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="wether">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="Photos">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="History/Meaning ">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
      <Box title="Comments">
        <Row data={"Ma,M,Sim,CoH,CoU,CoA,SIB"} />
      </Box>
    </Layout_Basic>
  );
}

// <div className="flex-1 xl:basis-10/12 xl:rounded-xl my-1 p-5 bg-white ">
