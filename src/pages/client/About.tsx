import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Aboutimg from "../../assets/about/about-sec1.jpg";
import "../../App.css";
import Aboutimg2 from "../../assets/about/about-sec-img2.jpg";

export const About = () => {
  //   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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
    <div data-scroll-container ref={scrollRef} style={{ overflow: "hidden" }}>
      {/* Section 1 */}
      <header
        className="about-header"
        data-scroll-section
        style={{
          minHeight: "40vh",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)", // More dynamic gradient
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative", // For additional effects
          overflow: "hidden",
        }}
      >
        {/* Background Animation */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 60%)",
            opacity: 0.8,
            animation: "pulse 6s infinite",
          }}
        ></div>

        {/* Title */}
        <h1
          data-scroll
          data-scroll-speed="2"
          style={{
            zIndex: 1, // Ensures text stays above the background effect
            fontSize: "48px",
            fontWeight: "bold",
            textTransform: "uppercase",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add depth to text
          }}
        >
          About Us
        </h1>

        {/* CSS Animation */}
        <style>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}</style>
      </header>

      {/* Side-by-Side Sections */}
      <div
        data-scroll-section
        style={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "55vh", // Adjusted for better proportions
          background: "linear-gradient(to bottom, #f9f9f9, #ffffff)", // Subtle gradient
          padding: "20px",
          gap: "20px",
        }}
      >
        {/* Left Section */}
        <section
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            data-scroll
            data-scroll-speed="4"
            src={Aboutimg}
            alt="GeoSpectra"
            style={{
              maxWidth: "80%",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Soft shadow
              marginBottom: "20px",
              marginTop: "40px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </section>

        {/* Right Section */}
        <section
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            data-scroll
            data-scroll-speed="2"
            style={{
              fontSize: "28px",
              color: "#333",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            Who we are?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              textAlign: "justify",
              marginBottom: "20px",
              padding: "15px",
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle card effect
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")
            }
          >
            GeoSpectra Technical Services LLC, having its registered office in
            Dubai, United Arab Emirates, focuses on providing high-end,
            cost-effective Technical & Application support to a range of
            Analytical Instruments (such as XRF/XRD/OES Analyzers) in “Mission
            Critical” environments in the Middle East and African Region. We
            also provide products and services in the field of Radiation
            Technology (Radio Isotopes supply and radioactive waste management)
            and Environmental & Geological Engineering. We are a team of
            well-qualified and technically competent professionals, having over
            150 man-years of combined experience amongst ourselves in providing
            support & solutions to industries across the world for more than 25
            years.
          </p>
        </section>
      </div>

      <div
        data-scroll-section
        style={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "50vh",
          background: "linear-gradient(to right, #f7f9fc, #e9ecef)", // Subtle gradient background
          padding: "20px",
        }}
      >
        {/* Left Section */}
        <section
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h2
            data-scroll
            data-scroll-speed="2"
            style={{
              fontSize: "32px",
              color: "#333",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            Our Experience
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
          <ul
            style={{
              listStyle: "none", // Remove default bullet points
              padding: "0",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              gap: "15px", // Space between list items
            }}
          >
            {[
              {
                text: "As Sales & Service Manager at Thermo Fischer Scientific PGNAA systems – have sold and supported over 150 systems in Middle East, Africa and worldwide.",
                icon: "🌍",
              },
              {
                text: "As Senior Service Engineers at Thermo Fischer Scientific (BMA, CBA, CBGN, CBX, OMNI, FSA, EBA), supporting more than 150 systems in Middle East, Africa and worldwide.",
                icon: "🛠️",
              },
              {
                text: "As Senior Field Engineers for PGNAA at Thermo Fisher, Scantech and other similar product manufacturers.",
                icon: "🔧",
              },
              {
                text: "As Field Service Engineers – Primary Support",
                icon: "👨‍🔧",
              },
              {
                text: "As Technical Experts – Secondary Support",
                icon: "📚",
              },
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "15px",
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span
                  style={{
                    fontSize: "24px",
                    color: "#007BFF", // Vibrant icon color
                    flexShrink: "0",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{ fontSize: "16px", color: "#333", lineHeight: "1.5" }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Right Section */}
        <section
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            data-scroll
            data-scroll-speed="5"
            src={Aboutimg2}
            alt="Our Experience"
            style={{
              maxWidth: "80%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
        </section>
      </div>

      {/* Section 4 */}
      <section
  data-scroll-section
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
  <div ref={scrollRef} style={{ position: "relative", overflow: "hidden" }}>
    {/* Section Heading */}
    <h2
      style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#007BFF",
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      Industries We Serve
    </h2>

    {/* Cards */}
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "0",
        margin: "0",
        justifyContent: "center",
      }}
    >
      {[
        { name: "Cement", icon: "🏗️" },
        { name: "Coal", icon: "⛏️" },
        { name: "Metal Manufacturing", icon: "⚙️" },
        { name: "Mining & Exploration", icon: "🛠️" },
        { name: "Petrochemical", icon: "🛢️" },
        { name: "Lubrication & Glass Manufacturing", icon: "🔧" },
        { name: "Education", icon: "📚" },
      ].map((industry, index) => (
        <li
          key={index}
          className="fade-in-right"
          style={{
            background: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
            padding: "15px",
            fontSize: "16px",
            color: "#333",
            width: "180px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            {industry.icon}
          </span>
          {industry.name}
        </li>
      ))}
    </ul>
  </div>

  {/* JavaScript for Animation */}
  <script>
    {`
    document.addEventListener('DOMContentLoaded', () => {
      const items = document.querySelectorAll('.fade-in-right');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      items.forEach((item) => observer.observe(item));
    });
    `}
  </script>

  {/* Styles */}
  <style>
    {`
      /* Fade-in animation */
      .fade-in-right {
        opacity: 0;
        transform: translateX(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .fade-in-right.visible {
        opacity: 1;
        transform: translateX(0);
      }

      /* Hover effect */
      li:hover {
        transform: scale(1.1) translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }

      li::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(0, 123, 255, 0.3), transparent);
        z-index: 1;
        transform: skewX(-45deg);
        transition: left 0.4s ease;
      }

      li:hover::before {
        left: 100%;
      }
    `}
  </style>
</section>

    </div>
  );
};
