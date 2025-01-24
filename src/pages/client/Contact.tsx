import Map, { Layer, Source } from 'react-map-gl/maplibre';
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import contact from '../../assets/contact/contact.svg'
import { useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css"; // Add Mapbox CSS


export const Contact = () => {

  const sourceId = "places";
  const circleLayerId = "circles";
  const symbolLayerId = "symbols";
  const [circleLayerRadius, setCircleLayerRadius] = useState(5);
  const [selectedCountry, setSelectedCountry] = useState(null); // Track which country is hovered

  const handleMarkerHover = (countryName) => {
    setSelectedCountry(countryName);
  };

  const handleMarkerLeave = () => {
    setSelectedCountry(null);
  };

  
  const jsonData = {
    "type": "FeatureCollection",
    "crs": { 
      "type": "name", 
      "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } 
    },
    "features": [
      { "type": "Feature", "properties": { "id": "DZ", "name": "Algeria" }, "geometry": { "type": "Point", "coordinates": [ 3.0588, 36.7538 ] } },
      { "type": "Feature", "properties": { "id": "EG", "name": "Egypt" }, "geometry": { "type": "Point", "coordinates": [ 31.2357, 30.0444 ] } },
      { "type": "Feature", "properties": { "id": "JO", "name": "Jordan" }, "geometry": { "type": "Point", "coordinates": [ 35.9304, 31.9634 ] } },
      { "type": "Feature", "properties": { "id": "NG", "name": "Nigeria" }, "geometry": { "type": "Point", "coordinates": [ 9.0575, 7.4951 ] } },
      { "type": "Feature", "properties": { "id": "LB", "name": "Lebanon" }, "geometry": { "type": "Point", "coordinates": [ 35.8497, 33.8869 ] } },
      { "type": "Feature", "properties": { "id": "ET", "name": "Ethiopia" }, "geometry": { "type": "Point", "coordinates": [ 38.7369, 9.145 ] } },
      { "type": "Feature", "properties": { "id": "MA", "name": "Morocco" }, "geometry": { "type": "Point", "coordinates": [ -7.0926, 31.7917 ] } },
      { "type": "Feature", "properties": { "id": "YE", "name": "Yemen" }, "geometry": { "type": "Point", "coordinates": [ 48.5164, 15.5521 ] } },
      { "type": "Feature", "properties": { "id": "OM", "name": "Oman" }, "geometry": { "type": "Point", "coordinates": [ 55.3137, 23.5854 ] } },
      { "type": "Feature", "properties": { "id": "LY", "name": "Libya" }, "geometry": { "type": "Point", "coordinates": [ 13.1924, 32.8797 ] } },
      { "type": "Feature", "properties": { "id": "PK", "name": "Pakistan" }, "geometry": { "type": "Point", "coordinates": [ 74.3587, 31.5204 ] } },
      { "type": "Feature", "properties": { "id": "SA", "name": "Saudi Arabia" }, "geometry": { "type": "Point", "coordinates": [ 46.6753, 24.7136 ] } },
      { "type": "Feature", "properties": { "id": "SN", "name": "Senegal" }, "geometry": { "type": "Point", "coordinates": [ -14.6928, 14.6928 ] } },
      { "type": "Feature", "properties": { "id": "QA", "name": "Qatar" }, "geometry": { "type": "Point", "coordinates": [ 51.1839, 25.276987 ] } },
      { "type": "Feature", "properties": { "id": "TZ", "name": "Tanzania" }, "geometry": { "type": "Point", "coordinates": [ 39.2026, -6.1659 ] } },
      { "type": "Feature", "properties": { "id": "TN", "name": "Tunisia" }, "geometry": { "type": "Point", "coordinates": [ 9.5375, 33.8869 ] } },
      { "type": "Feature", "properties": { "id": "TR", "name": "Turkey" }, "geometry": { "type": "Point", "coordinates": [ 35.2433, 39.9334 ] } },
      { "type": "Feature", "properties": { "id": "ZA", "name": "South Africa" }, "geometry": { "type": "Point", "coordinates": [ 24.7135, -29.0189 ] } },
      { "type": "Feature", "properties": { "id": "AE", "name": "UAE" }, "geometry": { "type": "Point", "coordinates": [ 55.2983, 23.4241 ] } },
      { "type": "Feature", "properties": { "id": "IN", "name": "India" }, "geometry": { "type": "Point", "coordinates": [ 78.9629, 20.5937 ] } },
      { "type": "Feature", "properties": { "id": "ZM", "name": "Zambia" }, "geometry": { "type": "Point", "coordinates": [ 27.8493, -13.1339 ] } },
      { "type": "Feature", "properties": { "id": "TM", "name": "Turkmenistan" }, "geometry": { "type": "Point", "coordinates": [ 59.5880, 38.9697 ] } }
    ]
  }
  
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
            data={jsonData}
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
                    // ["zoom"],
                    5,
                  ],
                  "text-anchor": "center",
                },
              }}
            />
          </Source>
        </Map>
      </div>

    </div>
  )
}


