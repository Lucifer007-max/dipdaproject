import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import contact from '../../assets/contact/contact.svg'

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  // iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  // iconUrl: require("leaflet/dist/images/marker-icon.png"),
  // shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export const Contact = () => {

  const position: [number, number] = [51.505, -0.09]; // Default coordinates (London)
  // Fix default icon issue with Leaflet

  return (
    <div className="margin_70">
      <CustomBreadcrum title={'CONTACT US'} baseLine={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis.'} image={contact} />

      <div className='contact_bg'>
        <h1 className='text-center'>In case you need to find us.<br />
          These are the coordinates for your biggest adventure yet.</h1>
      </div>
      {/* <Container> */}
      <div >
        {/* <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          {/* TileLayer defines the map appearance */}
        {/* <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          /> */}

        {/* Example marker */}
        {/* <Marker position={position}>
            <Popup>
              A marker in London. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
        {/* <MapContainer center={{ lat: 51.505, lng: -0.09 }}
            zoom={zoom}
            scrollWheelZoom={true}
            // ref={setMap}
            style={{ width: "500", height: "500px" }}>
            <h1 className='text-center'>Find us anywhere, because we’re putting ourselves on the map!</h1>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={position}
              icon={icon}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}

        {/* <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
        {/* <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        {/* </MapContainer> */}
      </div>
      {/* </Container> */}
      {/* <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div> */}

    </div>
  )
}
