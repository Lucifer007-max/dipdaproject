import "../../App.css";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Aboutimg from "../../assets/about/wework.jpg";

import { Footer } from "../../components/common/Footer";
import Banner from '../../assets/breadcrumbs/about.jpg'
import { Col, Container, Row } from "reactstrap";
import CustomBreadcrum from "../../components/breadcrum/Breadcrum";
import whoarewe from '../../assets/about/whoarewe.mp4'
import tools from "../../assets/about/tools.gif"
import books from '../../assets/about/books.gif'
export const About = () => {
    const [experience, setExperience] = useState(0);
    const [clients, setClients] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const incrementCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
            let count = 0;
            const stepTime = duration / target;

            const interval = setInterval(() => {
                count += 1;
                setter(count);
                if (count === target) {
                    clearInterval(interval);
                }
            }, stepTime);
        };

        incrementCounter(10, setExperience, 1000);  
        incrementCounter(250, setClients, 1000);  
        incrementCounter(15, setYears, 1000);     
    }, []);
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
        <div className="margin_70" data-scroll-container ref={scrollRef}>
            <div >
 
                <CustomBreadcrum title={'About Us'} baseLine={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sit?'} image={Banner} />

                <div className="padding_tb" data-scroll data-scroll-speed="3">
                    <Container>
                        <Row className="align-items-start">
                            <Col md={6}>
                                <h2 className="h2_effect ">
                                    <span className="h2_border text-center" data-text="Who Are We ?">Who Are We ?</span>
                                </h2>
                                <p className="sub_title">GeoSpectra Technical Services LLC, based in Dubai, UAE, offers cost-effective technical and application support for analytical instruments like XRF, XRD, and OES analyzers. We specialize in "mission-critical" environments across the Middle East and Africa.</p>
                            </Col>
                            <Col md={6} className="position-relative">
                                <video width="100%" height={'100%'} className='d-block m-auto' controls={false} autoPlay={true} loop={true} muted>
                                    <source src={whoarewe} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {/* <img className="position-relative bottom-0 w-75 d-block m-auto" src={Questioon} alt="GeoSpectra" /> */}
                                {/* <img className="d-block m-auto width_size" height={300} src={Aboutimg2} alt="GeoSpectra" /> */}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="padding_tb position-relative" data-scroll data-scroll-speed="4">
                    <Container>
                        <Row className="align-items-start">
                            <Col md={4}>
                                <img className="d-block m-auto position-relative industry_banner" style={{ zIndex: '99' }} src={Aboutimg} alt="GeoSpectra" />
                            </Col>
                            <Col md={1}></Col>
                            <Col md={6} className="">
                                <div className="position-relative" style={{ zIndex: '99', color: '#fff' }}>

                                    <h2 className="title mb-3">Industries We Serve</h2>
                                    <ul className="sub_title">
                                        <li>
                                            Cement

                                        </li>
                                        <li>

                                            Coal
                                        </li>
                                        <li>
                                            Metal Manufacturing

                                        </li>
                                        <li>

                                            Mining & Exploration
                                        </li>
                                        <li>
                                            Petrochemical

                                        </li>
                                        <li>
                                            Lubrication & Glass Manufacturing
                                        </li>
                                        <li>

                                            Education
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg_primary"></div>
                                {/* <img className="w-25 position-absolute bottom-0"  src={WhoArewe} alt="GeoSpectra" /> */}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="padding_tb" data-scroll data-scroll-speed="5">
                    {/* Left Section */}
                    <Container>
                        <Row>
                            <section>
                                <h2 className="h2_effect ">
                                    <span className="h2_border text-center" data-text="Our Experience">Our Experience</span>
                                </h2>
                                <p
                                    style={{
                                        fontSize: "18px",
                                        lineHeight: "1.6",
                                        color: "#555",
                                        marginBottom: "20px",
                                    }}
                                >
                                    A Team with over 100 man-years of experience in PGNAA, who have, in
                                    the past, worked with various original equipment manufacturers at
                                    senior positions.
                                </p>
                                <Row
                                // style={{
                                //     listStyle: "none", // Remove default bullet points
                                //     padding: "0",
                                //     margin: "0",
                                //     display: "flex",
                                //     flexDirection: "column",
                                //     gap: "15px", // Space between list items
                                // }}
                                >
                                    {[
                                        // {
                                        //     text: "As Sales & Service Manager at Thermo Fischer Scientific PGNAA systems – have sold and supported over 150 systems in Middle East, Africa and worldwide.",
                                        //     icon: "🌍",
                                        // },
                                        {
                                            text: "As Senior Service Engineers at Thermo Fischer Scientific (BMA, CBA, CBGN, CBX, OMNI, FSA, EBA), supporting more than 150 systems in Middle East, Africa and worldwide.",
                                            icon: tools,
                                        },
                                        // {
                                        //     text: "As Senior Field Engineers for PGNAA at Thermo Fisher, Scantech and other similar product manufacturers.",
                                        //     icon: "🔧",
                                        // },
                                        // {
                                        //     text: "As Field Service Engineers – Primary Support",
                                        //     icon: "👨‍🔧",
                                        // },
                                        {
                                            text: "As Technical Experts – Secondary Support",
                                            icon: books,
                                        },
                                    ].map((item, index) => (
                                        <Col md={4}
                                            key={index}

                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "column",

                                                    // gap: "15px",
                                                    padding: "15px",
                                                    height: '300px',
                                                    background: "#fff",
                                                    borderRadius: "12px",
                                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                }}
                                            >


                                                <span
                                                    style={{
                                                        fontSize: "24px",
                                                        color: "#007BFF", // Vibrant icon color
                                                        flexShrink: "0",
                                                    }}
                                                >
                                                    <img src={item.icon} />
                                                </span>
                                                <span
                                                    style={{ fontSize: "16px", color: "#333", lineHeight: "1.5" }}
                                                >
                                                    {item.text}
                                                </span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>


                            </section>

                        </Row>
                        <div className="counter-container row mt-lg-5 mt-3" data-scroll data-scroll-speed="1">
                            <div className="counter-item col-md-4 col-12" >
                                <h2 className="counter-number">{experience}+</h2>
                                <p className="counter-text">Years of Experience</p>
                            </div>
                            <div className="counter-item  col-md-4 col-12" >
                                <h2 className="counter-number">{clients}+</h2>
                                <p className="counter-text">Total Clients</p>
                            </div>
                            <div className="counter-item  col-md-4 col-12" >
                                <h2 className="counter-number">{years}+</h2>
                                <p className="counter-text">Years in Business</p>
                            </div>
                        </div>

                    </Container>
                </div>

                {/* Section 4 */}
                {/* <section
                    // data-scroll-section
                    style={{
                        minHeight: "80vh",
                        background: "linear-gradient(180deg, #cce7ff 0%, #e6f3ff 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "40px 20px",
                    }}
                >
                    <Container>
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            {/* Section Heading */}
                {/* <h2
                                style={{
                                    textAlign: "center",
                                    marginBottom: "40px",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                                }}
                                className="text-priamry"
                            >
                                Industries We Serve
                            </h2> */}

                {/* Cards */}
                {/* <Row>
                                {[
                                    { name: "Cement", icon: "🏗️" },
                                    { name: "Coal", icon: "⛏️" },
                                    { name: "Metal Manufacturing", icon: "⚙️" },
                                    { name: "Mining & Exploration", icon: "🛠️" },
                                    { name: "Petrochemical", icon: "🛢️" },
                                    { name: "Lubrication & Glass Manufacturing", icon: "🔧" },
                                    { name: "Education", icon: "📚" },
                                ].map((industry, index) => (
                                    <Col md={4} key={index}>
                                        <div className="fade-in-right card_list m-2"
                                            style={{
                                                background: "#ffffff",
                                                border: "1px solid #ddd",
                                                borderRadius: "12px",
                                                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                                                padding: "15px",
                                                fontSize: "16px",
                                                color: "#333",
                                                // width: "180px",
                                                // height: "200px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-evenly",
                                                // textAlign: "center",
                                                flexDirection: "column",
                                                // position: "relative",
                                                // overflow: "hidden",
                                            }}>

                                            <span
                                                style={{
                                                    fontSize: "32px",
                                                    marginBottom: "10px",
                                                }}
                                            >
                                                {industry.icon}
                                            </span>
                                            {industry.name}
                                        </div>
                                    </Col>
                                ))}
                            </Row> */}
                {/* </div>
                    </Container> */}

                {/* JavaScript for Animation */}
                {/* <script>
                        {`
    // document.addEventListener('DOMContentLoaded', () => {
    //   const items = document.querySelectorAll('.fade-in-right');
    //   const observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add('visible');
    //           observer.unobserve(entry.target);
    //         }
    //       });
    //     },
    //     { threshold: 0.1 }
    //   );
    //   items.forEach((item) => observer.observe(item));
    // });
    `}
                    </script>

                </section> */}

            </div>
            <Footer />
        </div>
    );
};
