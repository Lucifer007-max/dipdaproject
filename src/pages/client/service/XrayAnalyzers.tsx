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
import xRay from '../../../assets/service/xray.mp4'
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

            <CustomBreadcrum title={'Xray-Analyzers'} image={banner} baseLine={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, iusto.'} size={'contain'} />
            <Container>
                <section className="my-5">
                    <Row className="justify-content-center">
                        <div className="my-5 row">
                            {/* <h2 className="text-priamry text-center">Unparalleled Expertise in PGNAA Systems</h2> */}
                            <h2 className="h2_effect ">
                                <span className="h2_border text-center" data-text="Unparalleled Expertise in X-RAY Systems">Unparalleled Expertise in X-RAY Systems</span>
                            </h2>
                            <h5 className="text-center mb-5"> Your Trusted Partner in Sales and Service Support</h5>
                            <Col md={6} className="position-relative">
                                {/* 
                                <img src={Trusted} className="trusted_img" /> */}
                                {/* <img src={expert} className="w-75 d-block m-auto" /> */}
                                <video width="100%" height={'100%'} className='d-block m-auto mb-5' controls={false} autoPlay={true} loop={true} muted>
                                    <source src={xRay} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col md={6}>
                                <h6>
                                    With over 100 man-years of combined experience, our team has become a global leader in providing sales and service support for X-ray analyzers. We have been at the forefront of supporting more than 150 X-ray analyzer systems across 35+ countries for over two decades.
                                    <p>Our expertise spans the entire lifecycle of X-ray analyzers, including:</p>
                                    <ul>
                                        <li>A highly skilled and experienced team of professionals capable of supporting virtually all models and makes of X-ray analyzers, including Thermo Fisher (ARL), PANalytical (Phillips), Bruker, Shimadzu, and more.</li>
                                        <li>Over 100 man-years of combined experience in servicing and supporting X-ray analyzer systems.</li>
                                        <li>A robust global network of partners and channel collaborators to ensure comprehensive support worldwide.</li>
                                        <li>Provision of a wide range of spare parts to meet diverse operational needs.</li>
                                        <li>Supply of routine maintenance parts and consumables to ensure uninterrupted performance.</li>
                                        <li>A dedicated, single-window 24x7x365 support service to address customer requirements promptly and efficiently.</li>
                                    </ul>

                                </h6>
                            </Col>

                        </div>
                        {
                            CardList.map((res) => {
                                return <Col md={4} key={res.id} className="my-3 card_img"> <Card title={res.title} image={res.image} details={res.details} /></Col>
                            })
                        }





                    </Row>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

