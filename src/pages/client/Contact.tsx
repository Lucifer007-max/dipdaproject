import { Container } from 'reactstrap'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


export const Contact = () => {


  const zoom = 3;
  const position: [number, number] = [51.505, -0.09]

  return (
    <>
      <div className='contact_bg'>
        <h4>Contact Us</h4>
      </div>
      <Container>
        <div >
          <h1 className='text-center'>Find us anywhere, because we’re putting ourselves on the map!</h1>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
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
