// import React from "react";
// import "../../../assets/css/Product.css";
// import { Header } from "../../../components/common/Header";
import CustomBreadcrum from "../../../components/breadcrum/Breadcrum";
import { Footer } from "../../../components/common/Footer";

export function XrfSample() {
  return (
    <>
      {/* <CustomBreadcrum title={'PGNAA-Analyzers'} image={'GamaRays'} /> */}

      <div className="margin_70">
        {/* Banner Section */}
        <div className="xrf-banner">
          <div className="banner-content">
            <h1 className="banner-title">XRF Sample Preparation</h1>
            <p className="banner-description">
              High-quality sample preparation solutions for precise and reliable
              XRF analysis. Explore our range of sampling, preparation, and
              analysis tools.
            </p>
            <a href="#explore" className="banner-btn">
              Explore Products
            </a>
          </div>
        </div>

        {/* Step-by-Step Process Section */}
        <div className="xrf-container">
          <div className="xrf-step">
            <div className="xrf-title">Sampling Solutions</div>
            <ul className="xrf-list">
              <li>Big Bag Sampler</li>
              <li>Crusher & Pulverizer</li>
              <li>Grinding Mill</li>
              <li>Sample Divider</li>
              <li>Sieving Apparatus</li>
            </ul>
          </div>
          <div className="xrf-arrow">&#10140;</div>
          <div className="xrf-step">
            <div className="xrf-title">Sample Preparation</div>
            <ul className="xrf-list">
              <li>Fusion Machine (Gas & Electric)</li>
              <li>Pellet Press (Manual & Automatic)</li>
            </ul>
          </div>
          <div className="xrf-arrow">&#10140;</div>
          <div className="xrf-step">
            <div className="xrf-title">Sample Analysis</div>
            <ul className="xrf-list">
              <li>ED-XRF</li>
              <li>WD-XRF</li>
              <li>XRD</li>
            </ul>
          </div>
        </div>
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
      {/* <section className="xrf-cta">
        <div className="container">
          <h2>Get Started with XRF Solutions Today</h2>
          <p>
            Contact us to learn more about how we can support your laboratory
            needs.
          </p>
          <a href="#contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
