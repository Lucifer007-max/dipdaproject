// import React from "react";
// import "../../../assets/css/Product.css";
// import { Header } from "../../../components/common/Header";
import { Col, Row } from "reactstrap";
import CustomBreadcrum from "../../../components/breadcrum/Breadcrum";
import { Footer } from "../../../components/common/Footer";
import XRF from '../../../assets/breadcrumbs/xrf.webp'
export function XrfSample() {
  return (
    <>
      <CustomBreadcrum title={'XRF Sample Preparation'} baseLine={"High-quality sample preparation solutions for precise and reliable XRF analysis. Explore our range of sampling, preparation, and   analysis tools"} image={XRF} />

      <div className="margin_70">
        {/* Banner Section */}
    

        {/* Step-by-Step Process Section */}
        <Row className="xrf-container padding_tb">
          <Col md={4} className="xrf-step ">
            <div className="xrf-title">Sampling Solutions</div>
            <ul className="xrf-list">
              <li>Big Bag Sampler</li>
              <li>Crusher & Pulverizer</li>
              <li>Grinding Mill</li>
              <li>Sample Divider</li>
              <li>Sieving Apparatus</li>
            </ul>
          </Col>
          <div className="xrf-arrow">&#10140;</div>
          <Col md={4} className="xrf-step">
            <div className="xrf-title">Sample Preparation</div>
            <ul className="xrf-list">
              <li>Fusion Machine (Gas & Electric)</li>
              <li>Pellet Press (Manual & Automatic)</li>
            </ul>
          </Col>
          <div className="xrf-arrow">&#10140;</div>
          <Col md={4} className="xrf-step">
            <div className="xrf-title">Sample Analysis</div>
            <ul className="xrf-list">
              <li>ED-XRF</li>
              <li>WD-XRF</li>
              <li>XRD</li>
            </ul>
          </Col>
        </Row>
      </div>
      {/* Customer Benefits Section */}
      <section className="xrf-benefits">
        <div className="container">
          <h2>Benefits of Our Solutions</h2>
          <ul>
            <li>High precision and reliability.</li>
            <li>Customizable solutions for various industries.</li>
            <li>Robust and durable equipment.</li>
            <li>Compliance with international standards.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}

      <Footer />
    </>
  );
}
