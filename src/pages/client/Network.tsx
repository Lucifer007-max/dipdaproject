import Map, { Layer, Source } from 'react-map-gl/maplibre';
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import contact from '../../assets/contact/network.jpg'
import "mapbox-gl/dist/mapbox-gl.css"; // Add Mapbox CSS
import { jsonData } from './mapsData/locations'
import { FlagExample } from '../../components/common/Flag/Flag';
import { Col, Container, Row } from 'reactstrap';

export function Network() {
    const sourceId = "places";
    const symbolLayerId = "symbols";
    return (

        <div className="margin_70">
            <CustomBreadcrum title={'Our Network'} baseLine={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis.'} image={contact} />
            <div className='py-4'>
            <Container>
                    <Row className="align-items-start">
                        <h2 className="h2_effect mt-5 mb-3">
                            <span className="h2_border text-center d-block" data-text="OUR GEOGRAPHICAL PRESENCE">OUR GEOGRAPHICAL PRESENCE</span>
                        </h2>
                        <p className='mb-4'>GeoSpectra is proud to work with a diverse range of nations, each bringing its unique contributions to the global landscape. Our expertise spans multiple regions, from the deserts of North Africa to the vibrant landscapes of the Middle East and sub-Saharan Africa. These countries are at the forefront of economic growth, technological advancements, and cultural preservation. At GeoSpectra, we are committed to supporting these nations through cutting-edge solutions and services, helping them thrive in an ever-evolving world. With a focus on collaboration and innovation, we aim to build lasting partnerships that foster mutual growth and success.</p>
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
                <Container>
                    <Row className="align-items-start">
                        <h2 className="h2_effect my-5">
                            <span className="h2_border text-center d-block" data-text="Country Mark">Country Mark</span>
                        </h2>
                    </Row>
                </Container>
                <Row>
                    {jsonData.features.map((feature) => (
                        <Col sm="6" md="6" lg="3" key={feature.properties.id}>
                            <FlagExample
                                countryCode={feature.properties.id}
                                countryName={feature.properties.name}
                            />
                        </Col>
                    ))}
                </Row>

            </div>

        </div>
    )
}

export default Network
