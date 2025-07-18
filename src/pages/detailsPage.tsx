import { getRouteApi, useSearch } from "@tanstack/react-router";
import { Layout_Basic } from "../components/pageLayouts/layout_basic";
import Box from "../components/detailsPage/box";
import Row from "../components/detailsPage/row";
import ClassificationBox from "../components/detailsPage/classificationBox";
import MapComponent from "../components/detailsPage/mapComponent";
import WeatherComponent from "../components/detailsPage/weatherComponent";
import type { hill } from "../types/hill";

export default function DetailsPage() {
  //TODO: is there a difference -- // const data: [[hill], number] = useLoaderData({ from: "/HillDetails" });
  const data: [[hill], number] = getRouteApi("/details").useLoaderData();
  const hills = data[0];

  const { selectedIndex } = useSearch({
    from: "/details",
  });
  const selectedHill = hills[selectedIndex];

  return (
    <Layout_Basic>
      <div className="mb-10">
        <p className="text-4xl">{selectedHill.Name}</p>
        <div className="flex flex-row">
          <p className="content-center text-l uppercase text-gray-400 pr-4">
            Hill Number:
          </p>
          <p className="text-l"> {selectedHill.Number}</p>
        </div>
      </div>
      {/* <div className="flex mb-7 rounded-bl-md border-b border-l border-gray-300">
        <p className="p-2 px-5">Data</p>
        <p className="p-2 px-5">Map</p>
        <p className="p-2 px-5">Weather</p>
        <p className="p-2 px-5">Photos</p>
        <p className="p-2 px-5">Reference</p>
      </div> */}
      <Box title="Height" titleTwo="Prominence">
        <>
          <Row
            title={"Height:"}
            data={selectedHill.Metres + "m | " + selectedHill.Feet + "ft"}
          />
          {selectedHill.County_Top && (
            <Row title={"Top:"} data={selectedHill.County_Top} />
          )}
        </>
        <>
          {selectedHill.Parent_name_Ma && (
            <>
              <Row title={"Parent Ma:"} data={selectedHill.Parent_name_Ma} />
              <Row
                title={"Parent Ma Num:"}
                data={selectedHill.Parent_Ma.toString()}
              />
              <Row
                title={"Parent SMC:"}
                data={selectedHill.Parent_SMC?.toString()}
              />
            </>
          )}
          <Row title={"Drop:"} data={selectedHill.Drop.toString()} />
          <Row
            title={"Col Height:"}
            data={selectedHill.Col_height.toString()}
          />
          <Row title={"Col Grid Ref:"} data={selectedHill.Col_grid_ref} />
        </>
      </Box>
      <ClassificationBox ClassificationCSV={selectedHill.Classification} />
      <Box title="Location" titleTwo="Summit">
        <>
          <Row title={"Country:"} data={selectedHill.Country} />
          <Row title={"County:"} data={selectedHill.County} />
          {selectedHill.Island && (
            <Row title={"Island:"} data={selectedHill.Island} />
          )}
        </>
        <>
          {selectedHill.Feature && (
            <Row title="Feature" data={selectedHill.Feature} />
          )}
          {selectedHill.Observations && (
            <Row title={"Observations:"} data={selectedHill.Observations} />
          )}
          {selectedHill.Survey && (
            <Row title={"Survey Method:"} data={selectedHill.Survey} />
          )}
        </>
      </Box>
      <MapComponent
        lati={selectedHill.Latitude}
        long={selectedHill.Longitude}
      />
      <button
        onClick={() => {
          document.body.querySelector("#main-scrollable-area")?.scroll(0, 0);
        }}
      >
        To The Top
      </button>
      <WeatherComponent />
      <Box title="Reference">
        <>
          <Row
            title={"Section Num:"}
            data={selectedHill.Section_int.toString()}
          />
          <Row title={"Area:"} data={selectedHill.Area} />
          <Row
            title={"Maps Grid Ref (6-figure):"}
            data={selectedHill.Grid_ref}
          />
          <Row
            title={"GPS Grid Ref (10-figure):"}
            data={selectedHill.Grid_ref_10}
          />
          <Row
            title={"Grid Ref XY:"}
            data={selectedHill.GridrefXY.toString()}
          />
          <Row
            title={"Topo Section (Alan Dawson's):"}
            data={selectedHill.Topo_Section}
          />
          <Row
            title={"Geography Website:"}
            data={selectedHill.Geograph.toString()}
          />
          <Row title={"SMC/rhb Region:"} data={selectedHill.Region} />
        </>
      </Box>
    </Layout_Basic>
  );
}
