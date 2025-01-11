import { Container } from 'reactstrap'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { MapContainer, Popup, TileLayer } from 'react-leaflet';

interface Marker {
  markerOffset: number;
  name: string;
  coordinates: [number, number]; // Tuple type
}
export const Contact = () => {

  const geoUrl =
    "../../components/maps/geo.json";
  const markers: Marker[] = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [58.3816, 34.6037]
    },
    { markerOffset: -15, name: "La Paz", coordinates: [68.1193, 16.4897] },
    { markerOffset: 25, name: "Brasilia", coordinates: [47.8825, 15.7942] },
    { markerOffset: 25, name: "Santiago", coordinates: [70.6693, 33.4489] },
    { markerOffset: 25, name: "Bogota", coordinates: [74.0721, 12.711] },
    { markerOffset: 25, name: "Quito", coordinates: [78.4678, 0.1807] },
    { markerOffset: -15, name: "Georgetown", coordinates: [58.1551, .8013] },
    { markerOffset: -15, name: "Asuncion", coordinates: [57.5759, 25.2637] },
    { markerOffset: 25, name: "Paramaribo", coordinates: [55.2038, .852] },
    { markerOffset: 25, name: "Montevideo", coordinates: [56.1645, 34.9011] },
    { markerOffset: -15, name: "Caracas", coordinates: [66.9036, 0.4806] },
    { markerOffset: -15, name: "Lima", coordinates: [77.0428, 12.0464] }
  ];

  return (
    <>
      <div className='contact_bg'>
        <h4>Contact Us</h4>
      </div>
      <Container>
        <div >
          <h1 className='text-center'>Find us anywhere, because we’re putting ourselves on the map!</h1>
          {/* <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={zoom}
            scrollWheelZoom={true}
            ref={setMap}
            style={{ width: "500", height: "500px" }}
          >
            <TileLayer
              attribution='&copy; <a href="#">DUALMONEY</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {loading ? (
              <div className="map_div">
                <Spinner
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    left: "50%",
                  }}
                  color="primary"
                >
                  {" "}
                </Spinner>
              </div>
            ) : (
              <>
                {data?.map((res, index) => {
                  const {
                    locationLatitude,
                    locationLongitude,
                    name,
                    profileImage,
                    firstName,
                    address,
                    countryCode,
                    phone,
                    email,
                    country,
                    city,
                  } = res;
                  if (locationLatitude !== null || locationLongitude !== null) {
                    const icon = L.icon({
                      iconUrl:
                        "https://static.vecteezy.com/system/resources/previews/023/652/060/non_2x/green-map-pointer-icon-on-a-transparent-background-free-png.png",
                      iconSize: [32, 32],
                      iconAnchor: [16, 32],
                      popupAnchor: [0, -32],
                    });
                    return (
                      <Marker
                        position={[locationLatitude, locationLongitude]}
                        icon={icon}
                        key={index}
                      >
                        <Popup>
                          <h5>
                            {" "}
                            {name === undefined ? firstName : name} <br />{" "}
                            <h6>
                              ({country?.name} {city?.name})
                            </h6>
                          </h5>
                          <h6>
                            <span className="text-muted">Address</span> <br />{" "}
                            {address && address}
                          </h6>
                          <h6>
                            <span className="text-muted">Phone</span> <br />{" "}
                            <b>
                              ({countryCode}) - {phone}
                            </b>
                          </h6>
                          <h6>
                            <span className="text-muted">Email</span> <br />{" "}
                            <b>
                              <a
                                href={`mailto:${email}`}
                                style={{ color: "#CC9752" }}
                              >
                                {email}
                              </a>
                            </b>
                          </h6>
                        </Popup>
                      </Marker>
                    );
                  }
                })}
              </>
            )}
          </MapContainer> */}
        </div>
      </Container>
      {/* <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div>
      <div className='contact_bg'> </div> */}

    </>
  )
}
