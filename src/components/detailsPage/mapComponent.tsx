import {
  APIProvider,
  Map,
  Marker,
  Pin,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

export default function MapComponent({
  lati,
  long,
}: {
  lati: number;
  long: number;
}) {
  const map = useMap();

  function handleClick() {
    console.log("test");
    map?.panTo({ lat: lati, lng: long });
  }

  return (
    // <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <div className="pb-5 pt-3">
      <div className=" flex-col ">
        <p className="inline ml-3 px-1.5 bg-white">Map</p>

        <div className="flex-1 pt-1 aspect-square w-full max-h-screen">
          <Map
            style={{
              borderRadius: "12px",
              overflow: "hidden",
            }}
            //   style={{ width: "100vw", height: "100vh" }}
            defaultCenter={{ lat: lati, lng: long }}
            defaultZoom={12}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            mapId={"NEAR_ME_MAP_ID"}
            reuseMaps={true}
          >
            <AdvancedMarker
              position={{ lat: lati, lng: long }}
              clickable={true}
              onClick={handleClick}
            >
              <Pin
                background={"#52d0b8"}
                borderColor={"#3ea390"}
                glyphColor={"#3ea390"}
              />
            </AdvancedMarker>
            {/* <Marker position={{ lat: lati, lng: long }} /> */}
          </Map>
        </div>
      </div>
    </div>
    // </APIProvider>
  );
}

{
  /* <Box title="Map">
        <>
          <Row data={"Map"} />
          <Row title={"long:"} data={selectedHill.Longitude} />
          <Row title={"lat:"} data={selectedHill.Latitude} />
          <Row title={"x cords:"} data={selectedHill.Xcoord} />
          <Row title={"y cords:"} data={selectedHill.Ycoord} />
        </>
      </Box> */
}
