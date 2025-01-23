import Map, { Layer, Source } from 'react-map-gl/maplibre';
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import contact from '../../assets/contact/contact.svg'
import { useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css"; // Add Mapbox CSS


export const Contact = () => {

  const sourceId = "places";
  const circleLayerId = "circles";
  const symbolLayerId = "symbols";
  const [circleLayerRadius, setCircleLayerRadius] = useState(15);
  // const [circleLayerVisibility, setCircleLayerVisibility] = useState("visible");
  // const [symbolLayerVisibility, setSymbolLayerVisibility] = useState("visible");

  // const handleCircleLayerRadius = (radius: number) => {
  //   setCircleLayerRadius(radius);
  // };
  // const handleCircleLayerVisibility = (checked: boolean) => {
  //   setCircleLayerVisibility(checked ? "visible" : "none");
  // };
  // const handleSymbolLayerVisibility = (checked: boolean) => {
  //   setSymbolLayerVisibility(checked ? "visible" : "none");
  // };
  return (
    <div className="margin_70">
      <CustomBreadcrum title={'CONTACT US'} baseLine={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis.'} image={contact} />

      {/* <div className='contact_bg'>
        <h1 className='text-center'>In case you need to find us.<br />
          These are the coordinates for your biggest adventure yet.</h1>
      </div> */}
      <div className='py-5'>

        <Map
          reuseMaps
          dragRotate={false}
          touchZoomRotate={false}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 1,
          }}
          style={{ width: '100%', height: '600px' }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=fWe6ey4q0sUTydAJSk3E"

        >
          <Source
            id={sourceId}
            type="geojson"
            maxzoom={5}
            data="https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson"
          >
            <Layer
              {...{
                source: sourceId,
                id: circleLayerId,
                type: "circle" as const,
                paint: {
                  "circle-color": "#ff0000",
                  "circle-radius": circleLayerRadius,
                  "circle-stroke-width": 0,
                  "circle-stroke-color": "#000",
                },
                layout: {
                  // visibility: circleLayerVisibility,
                },
              }}
            />
            <Layer
              {...{
                id: symbolLayerId,
                type: "symbol" as const,
                source: sourceId,
                layout: {
                  // visibility: symbolLayerVisibility,
                  "text-allow-overlap": true,
                  "text-font": ["Arial Italic"],
                  "text-field": ["get", "mag"],
                  "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    // zoom is 5 (or less)
                    5,
                    12,
                    // zoom is 10 (or greater)
                    10,
                    11,
                  ],
                  "text-anchor": "center",
                  // "text-offset": [0, -2],
                },
              }}
            />
          </Source>
        </Map>
      </div>

    </div>
  )
}


