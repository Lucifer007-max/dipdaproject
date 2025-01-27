import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import Training from '../../assets/breadcrumbs/training.jpg';
import Image1 from '../../assets/training/Company.gif'
import { Col, Container, Row } from "reactstrap";
import { Footer } from "../../components/common/Footer";
export const Traning = () => {
    return (
        <>
            <CustomBreadcrum title={'Traning'} baseLine={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ex.'} image={Training} />
            <Container className="padding_tb">
                <Row className="align-items-center">
                    <Col md={7}>
                    <h2 className="title mb-3">Training Overview
                    </h2>
                        <ul>
                            <li>
                                We conduct dedicated ON-SITE user training programs at plant site ON CUSTOMER SYSTEMS and provide advance Operation, maintenance and troubleshooting training specific to your PGNAA and/or X-ray analyzers.

                            </li>
                            <li>
                                Periodically, we also conduct OFF-SITE training programs on PGNAA and X-ray analyzer systems maintenance and troubleshooting at various locations. An enquiry can be sent to us directly or thru our website.
                            </li>
                            <li>

                                Eventually with our training programs, most customers are able to bypass expensive maintenance agreement of OEMs and can easily operate & troubleshoot the analyzer systems at much less cost and better capabilities.

                            </li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <img src={Image1} className="w-100 position-relative" />
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}
