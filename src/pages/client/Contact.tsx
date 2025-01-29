import Map, { Layer, Source } from 'react-map-gl/maplibre';
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import contact from '../../assets/contact/contact.svg'
// import { useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css"; // Add Mapbox CSS
import { jsonData } from './mapsData/locations'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const Contact = () => {

  const sourceId = "places";
  const symbolLayerId = "symbols";


  return (
    <div className="margin_70">
      <CustomBreadcrum title={'CONTACT US'} baseLine={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis.'} image={contact} />

      <div className='py-5'>

        <Container className="my-5">
          <Row>
            {/* Form Column */}
            <Col md="6">
              <Form className="p-4 shadow-sm bg-white rounded">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    className="form-control"
                    rows="5"
                  />
                </FormGroup>
                <Button color="primary" className="animated-button">
                  Submit
                </Button>
              </Form>
            </Col>

            {/* Image Column */}
            <Col md="6" className="d-flex align-items-center justify-content-center">
              <img
                src="https://via.placeholder.com/500x500" // Replace with your image URL
                alt="Contact"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
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


