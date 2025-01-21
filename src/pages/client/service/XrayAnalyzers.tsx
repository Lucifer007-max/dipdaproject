import { Col, Container, Row } from "reactstrap"
import CustomBreadcrum from "../../../components/breadcrum/Breadcrum"
import Card from "../../../components/common/Card/Card"

import service1 from '../../../assets/service/Maintance.gif'
import service2 from '../../../assets/service/SITECO-ORDINATOR.gif'
import service3 from '../../../assets/service/SUPPORT247.gif'
import service4 from '../../../assets/service/Supply&Replenishments.gif'
import service5 from '../../../assets/service/SystemValidation.gif'
import banner from '../../../assets/breadcrumbs/xray.jpg'
import { Footer } from "../../../components/common/Footer"
import expert from '../../../assets/breadcrumbs/Expertise.gif'
export const XrayAnalyzers = () => {
    const CardList = [
        {
            id: 1,
            title: 'Dedicated Support Engineer',
            image: service1,
            details: 'We assign a dedicated support engineer to each site and system. This ensures personalized, round-the-clock support availability, enabling quicker response times and better system reliability.'
        },
        {
            id: 2,
            title: '24X7X365 Days of Remote Support',
            details: 'Our team is available 24/7/365 to assist your operations through phone, email, and web-based communication channels. This continuous support minimizes downtime and ensures your systems are always running smoothly.',
            image: service2
        },
        {
            id: 3,
            title: `On job training to customer's team`,
            details: 'We empower your team by providing on-the-job training during our support interactions. This approach ensures your personnel are equipped to handle emergency repairs and routine maintenance independently, building a self-reliant workforce.',
            image: service3
        },
        {
            id: 4,
            title: 'Maintenance & Support Agreement',
            details: 'We offer customizable and cost-effective Maintenance and Support Agreement (MSA) packages tailored to your need.',
            image: service4
        },
        {
            id: 5,
            title: 'Periodic System Validation',
            details: 'We perform complete system validation to ensure your PGNAA systems operate at peak performance. Our validation services are offered at competitive prices and are compatible with any existing PGNAA system model.',
            image: service5
        },
    ]
    return (
        <div className="margin_70">

            <CustomBreadcrum title={'Xray-Analyzers'} image={banner} baseLine={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, iusto.'}  />
            <Container>
                <section className="my-5">
                    <Row className="justify-content-center">
                        {
                            CardList.map((res) => {
                                return <Col md={4} key={res.id} className="my-3 card_img"> <Card title={res.title} image={res.image} details={res.details} /></Col>
                            })
                        }
                        <div className="my-5 row">
                            <h2 className="text-priamry text-center">Unparalleled Expertise in PGNAA Systems</h2>
                            <h5 className="text-center mb-5"> Your Trusted Partner in Sales and Service Support</h5>
                            <Col md={6} className="position-relative">
                                {/* 
                                <img src={Trusted} className="trusted_img" /> */}
                                <img src={expert} className="w-75 d-block m-auto" />
                            </Col>
                            <Col md={6}>
                                <h6>

                                    With over 100 man-years of combined experience, our team has become a global leader in providing sales and service support for PGNAA (Prompt Gamma Neutron Activation Analysis) systems. We have been at the forefront of supporting more than 150 PGNAA systems across 35+ countries for over two decades.
                                    <p>
                                        Our expertise extends across all aspects of the system lifecycle, including:
                                    </p>
                                    <ul>
                                        <li>
                                            We have expertise and well experienced team of professionals to support virtually all models and makes of X-ray analyzers, such as Thermo Fisher (ARL), PANalytical (Phillips), Bruker, Shimadzu etc.

                                        </li>
                                        <li>
                                            Having combined experiences of 100 Man-Years supporting such systems

                                        </li>
                                        <li>


                                            Worldwide network and channel partners
                                        </li>
                                        <li>


                                            Support and supply of wide range of spares
                                        </li>
                                        <li>

                                            Support and supply of routine maintenance parts and consumables
                                        </li>
                                        <li>

                                            Dedicated single window of 24x7x365 support
                                        </li>
                                    </ul>
                                </h6>
                            </Col>

                        </div>





                    </Row>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

