import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LocomotiveScroll from 'locomotive-scroll';

export const About = () => {
    const scrollRef = useRef<any>(null);

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
        <div ref={scrollRef} data-scroll-container>

            <Container >
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12} data-scroll data-scroll-speed="1" data-scroll-class="in-view">
                        <h1>Hi, we're a technical solutions partner driving innovation in analytical and environmental engineering.</h1>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} data-scroll data-scroll-speed="2" data-scroll-class="in-view">
                        <p>
                            GeoSpectra Technical Services LLC, having its registered office in Dubai, United Arab Emirates, focuses on providing high end, cost-effective technical & application support to range of Analytical Instruments(such as XRF/XRD/OES Analyzers) in “Mission Critical” environment.We also provide products and services in field of Radiation Technology (Radio Isotopes supply and radioactive waste management) and in field of Environmental & Geological Engineering.

                        </p>
                    </Col>                  
                </Row>
            </Container>
        </div>

    )
};
