import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Aboutimg from '../../assets/about/about-sec1.jpg';
import '../../App.css';


export const About = () => {
    //   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<any>(null);

    useEffect(() => {
        if (scrollRef.current) {
            const scrollInstance = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.5, 
            });

            return () => {
                scrollInstance.destroy(); // Cleanup to prevent memory leaks
            };
        }
    }, []);

    // const cardStyle = {
    //     background: '#ffffff', // White card background
    //     border: '1px solid #ddd', // Light gray border
    //     borderRadius: '8px', // Rounded corners
    //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    //     padding: '15px', // Inner spacing
    //     fontSize: '16px', // Font size
    //     color: '#333', // Text color
    //     width: '150px', // Card width
    //     height: '100px', // Card height
    //     display: 'flex', // Center align text
    //     alignItems: 'center', // Vertical alignment
    //     justifyContent: 'center', // Horizontal alignment
    //     textAlign: 'center', // Align text inside the card
    //     transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hover animation
    // };

    // cardStyle[':hover'] = {
    //     transform: 'translateY(-5px)', // Lift effect
    //     boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)', // Stronger shadow
    // };


    return (
        <div data-scroll-container ref={scrollRef} style={{ overflow: 'hidden' }}>
            {/* Section 1 */}
            <header
                className='about-header'
                data-scroll-section
                style={{
                    minHeight: '40vh',
                    background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1 data-scroll data-scroll-speed="2">About us</h1>
            </header>

            {/* Side-by-Side Sections */}
            <div
                data-scroll-section
                style={{
                    display: 'flex',
                    minHeight: '100vh', // Full viewport height for the container
                }}
            >
                {/* Section 2 */}
                <section
                    style={{
                        flex: 1,
                        // background: '#f4f4f4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'black',
                    }}
                >
                    <img
                        data-scroll
                        data-scroll-speed="6"
                        src={Aboutimg}
                        alt="Slower Image"
                        style={{ maxWidth: '80%', height: '80%', marginBottom: '20px' }}
                    />
                </section>

                {/* Section 3 */}
                <section
                    style={{
                        flex: 1,
                        // background: '#ffcccb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p className='about-sec2' data-scroll data-scroll-speed="2">GeoSpectra Technical Services LLC, having its registered office in Dubai, United Arab Emirates, focuses on providing high end, cost-effective Technical & Application support to range of Analytical Instruments(such as XRF/XRD/OES Analyzers,) in “Mission Critical” environment in Middle East and African Region.

                        We also provide products and services in field of Radiation Technology (Radio Isotopes supply and radioactive waste management) and Environmental & Geological Engineering.

                        We are team of well qualified and technically competent professionals, having over 150 man-years of combined experience amongst ourselves in providing support & solutions to the industries, across the world,since more than 25 years
                    </p>
                </section>
            </div>


            {/* Section 4 */}
            <section
                data-scroll-section
                style={{
                    minHeight: '100vh',
                    background: '#cce7ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                    <div data-scroll-container>
                        <h2 data-scroll data-scroll-speed="2" style={{ textAlign: 'center', marginBottom: '40px' }}>
                            Industries We Serve:
                        </h2>
                        <ul
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px',
                                padding: '0',
                                margin: '0',
                                justifyContent: 'center',
                            }}
                        >
                            {[
                                'Cement',
                                'Coal',
                                'Metal Manufacturing',
                                'Mining & Exploration',
                                'Petrochemical',
                                'Lubrication & Glass Manufacturing',
                                'Education',
                            ].map((industry, index) => (
                                <li
                                    key={index}
                                    data-scroll
                                    data-scroll-speed={`${(index % 2 === 0 ? 1 : 1) * 2}`} // Alternate speed for cards
                                    style={{
                                        background: '#ffffff',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        padding: '15px',
                                        fontSize: '16px',
                                        color: '#333',
                                        width: '150px',
                                        height: '100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                >
                                    {industry}
                                </li>
                            ))}
                        </ul>
                    </div>
                {/* </p> */}
                {/* <p data-scroll data-scroll-speed="3">This is a faster scroll example.</p> */}
            </section>

            {/* Section 5 */}
            {/* <footer
        data-scroll-section
        style={{
          minHeight: '100vh',
          background: '#333',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3>Footer: Smooth Scrolling Ends Here</h3>
      </footer> */}
        </div>
    );
};
