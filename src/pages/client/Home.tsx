import { Col, Container, Row } from 'reactstrap'
import Map, { Layer, Source } from 'react-map-gl/maplibre';
import { jsonData } from './mapsData/locations';
import banner from '../../assets/home/banner.mp4'
import home1 from '../../assets/home/process.mp4';
import radtion from '../../assets/home/radtion.mp4'
import geolocation from '../../assets/home/geolocation.mp4'
import arrow from '../../assets/home/downarrow.gif'
import { Footer } from '../../components/common/Footer'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import pin from '../../assets/map-pin.png'
export function Home() {

  const scrollRef = useRef<any>(null);

  const sourceId = "places";
  const symbolLayerId = "symbols";


  useEffect(() => {
    if (scrollRef.current) {
      const scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1, // Adjust for smoothness
      });

      return () => {
        scrollInstance.destroy(); // Cleanup to prevent memory leaks
      };
    }
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="video-container">
        <video width="100%" className="d-block m-auto video" controls={false} autoPlay loop muted>
          <source src={banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>EXPLORE GEOGRAPHICAL PRESENCE</h1>
          {/* <p>Additional information here</p> */}
        </div>
      </div>

      <Container>
        <section className='text-center padding_tb' data-scroll data-scroll-speed="2">
          <h2 className="h2_effect">
            <span className="h2_border" data-text="Who We Are">Who We Are</span>
          </h2>
          <p className='w-100  text-center' style={{ margin: '20px auto' }}>Spectra Line Industrial LLC and GeoSpectra Technical Services LLC, with offices in Dubai, UAE, specialize in providing high-end, cost-effective technical solutions and services across a range of industries, including Cement & Coal, Iron & Steel, Oil & Gas, and Minerals. They offer dedicated technical support for analytical instruments such as XRF, XRD, and OES analyzers, as well as Gamma-ray on-line analyzers like PGNAA systems (e.g., Gamma-Metrics, Geoscan). Their services also extend to radiation technology, including the supply of radioactive isotopes, radiation services, and radioactive waste management, along with expert training and application support in mission-critical environments.
          </p>
          <a href="#skip"><img src={arrow} width={100} className='cursor-pointer' /></a>
        </section>
      </Container>
      <section className="parallax-section">
        <Container>

          <Row className="padding_tb" id='skip'>
            <Col md={6}>
              <section className="text-start custom_card">
                <h2 className="h2_effect">
                  <span className="h2_border" data-text="Our Mission">Our Mission</span>
                </h2>
                <p>
                  GeoSpectra Technical Services LLC, having its registered office in Dubai, United Arab Emirates, focuses on providing high-end, cost-effective technical & application support to a range of Analytical Instruments (such as XRF/XRD/OES Analyzers) in “Mission Critical” environments. We also provide products and services in the field of Radiation Technology (Radio Isotopes supply and radioactive waste management) and in the field of Environmental & Geological Engineering.
                </p>
              </section>
            </Col>
            <Col md={6}>
              <section className="text-right custom_card">
                <h2 className="h2_effect">
                  <span className="h2_border" data-text="Our Vision">Our Vision</span>
                </h2>
                <p>
                  To be a globally recognized leader in delivering innovative and reliable technical solutions for analytical instruments, radiation technology, and environmental and geological engineering. We aim to set the benchmark for excellence in mission-critical environments by ensuring sustainability, safety, and efficiency in every project we undertake.
                </p>
              </section>
            </Col>
          </Row>

        </Container>
      </section>



      <Container>

        <section className='my-5'>
          <h2 className="h2_effect text-center" style={{ marginBottom: '20px' }}><span className="h2_border" data-text="Products & Services We ProvideVision">Products & Services We Provide</span></h2>
          <Row className='align-items-center justify-content-center'>
            <Col md={6} data-scroll data-scroll-speed="4">
              {/* <img src={home1} className='w-100 d-block m-auto' /> */}
              {/* <video src={home1} autoPlay></video> */}
              <video width="100%" height={500} className='d-block m-auto' controls={false} autoPlay={true} loop={true} muted>
                <source src={home1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md={6} data-scroll data-scroll-speed="2" className='margin_top_sm_30'>
              <h4 className='text-start'><span className='h2_border'>ANALYTICAL PROCESS & QUALITY CONTROL</span></h4>
              <p>Analytical processes and quality control play a vital role in ensuring precision and reliability across various industries. Leveraging advanced technologies such as X-ray Fluorescence (XRF) Analyzers, organizations can perform non-destructive elemental analysis with high accuracy. X-ray Diffraction (XRD) Analyzers enable the study of material structures at the atomic level, providing critical insights for research and development.</p>
              <ul>
                <li>X-ray Fluorescence (XRF) Analyzers</li>
                <li>
                  X-ray Diffraction (XRD) Analyzers</li>
                <li>

                  Optical Emission Spectrometers (OES)
                </li>
                <li>

                  Lab Automation & Networking
                </li>
              </ul>
            </Col>
          </Row>
        </section>

        <section className=''>
          <Row className='align-items-center justify-content-center'>
            <Col md={6} data-scroll data-scroll-speed="2">
              <h4 className='text-start'><span className='h2_border'>RADIATION SERVICES & PRODUCTS SUPPORT</span></h4>
              <p>
                Our company offers comprehensive Radiation Services & Products Support to meet the needs of industries working with radioactive materials. Our Professional Consultancy services provide expert guidance to ensure compliance with regulatory standards and the safe use of radiation technologies. We specialize in Radioactive Waste Management, handling the removal, transport, and disposal of hazardous materials in a secure and environmentally responsible manner.

              </p>
              <ul>
                <li>Professional Consultancy</li>
                <li>Radioactive Waste Management (Removal, Transport & Disposal)</li>
                <li> Radioisotope Supply & Installation (Cf252, Cs137, Co60 etc)</li>
              </ul>
            </Col>
            <Col md={6} data-scroll data-scroll-speed="4">
              {/* <img src={banner} className='w-75 position-absolute right-0 ' height={300} /> */}
              <video width="100%" height={'100%'} className='d-block m-auto' controls={false} autoPlay={true} loop={true} muted>
                <source src={radtion} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </section>

        <section>
          <Row className='align-items-center justify-content-center row_revers'>
            <Col md={6} data-scroll data-scroll-speed="4">
              {/* <img src={banner} className='w-75 position-absolute left-0 ' height={300} /> */}
              <video width="100%" height={'100%'} className='d-block m-auto' controls={false} autoPlay={true} loop={true} muted>
                <source src={geolocation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md={6} data-scroll data-scroll-speed="2" className='margin_top_sm_30'>
              <h4 className='text-start'><span className='h2_border'>ENVIRONMENTAL & GEOLOGICAL ENGINEERING</span></h4>
              <p>
                Our Environmental & Geological Engineering services are designed to support industries in achieving sustainable practices while optimizing their operations. We offer a wide range of Environmental Monitoring Instruments & Services, providing accurate and real-time data to assess and manage environmental impact. Our solutions help clients monitor air, water, and soil quality, ensuring compliance with environmental regulations and promoting eco-friendly practices.


              </p>
              <ul>
                <li>Environmental Monitoring Instruments & Services
                </li>
                <li>
                  Geological Reserves Estimation and Mining Planning.
                </li>
                <li>

                  Datamine Support-Computerized planning for mineral excavation

                </li>

              </ul>
            </Col>
          </Row>
        </section>


      </Container>
      <section>
        <h2 className="h2_effect my-5">
          <span className="h2_border text-center" data-text="You Can Find Us">You Can Find Us</span>
        </h2>
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
              map.loadImage(pin, (error, image) => {
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
      </section>
      <Footer />
    </div>
  )
}