import Map, { Layer, Source } from 'react-map-gl/maplibre';
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import contact from '../../assets/contact/contact.svg'
import { useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css"; // Add Mapbox CSS
import { jsonData } from './mapsData/locations'

export const Contact = () => {

  const sourceId = "places";
  const symbolLayerId = "symbols";


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
            longitude: 24.7135,
            latitude: -29.0189,
            zoom: 2,
          }}
          style={{ width: "100%", height: "600px" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=fWe6ey4q0sUTydAJSk3E"
          onLoad={(event) => {
            const map = event.target;
            if (!map.hasImage("custom-icon")) {
              map.loadImage("https://openclipart.org/image/2400px/svg_to_png/169839/map-pin.png", (error, image) => {
                if (error) throw error;
                map.addImage("custom-icon", image as any);
              });
            }
          }}
        >
          <Source id={sourceId} type="geojson" maxzoom={5} data={jsonData}>
            <Layer
              {...{
                id: symbolLayerId,
                type: "symbol" as const,
                source: sourceId,
                layout: {
                  "icon-image": "custom-icon", // Use the image ID added to the map
                  "icon-size": 0.02, // Adjust the size of the icon
                  "icon-allow-overlap": true, // Allow icons to overlap
                  "icon-rotate": 180
                },
              }}
            />
          </Source>
        </Map>

      </div>

    </div>
  )
}


