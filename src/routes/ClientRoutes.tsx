import { Suspense, useEffect, useRef } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClientLayout from "../layouts/ClientLayout";
import Logo from '../assets/logo.png'
import gsap from "gsap";

const ClientRoute = ({ isLoggedInClient }: any) => {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (loadingRef.current) {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
      });

      tl.set(loadingRef.current, {
        x: "100%",
        opacity: 1,
        backgroundColor: "rgb(209 85 85 )",
        zIndex: 9999,

      })
        .to(loadingRef.current, {
          x: "0%",
          backgroundColor: "#dd504c",
          zIndex: 9999,

        })
        .to(
          loadingRef.current,
          {
            x: "-100%",
            backgroundColor: "rgb(209 85 85)",
            opacity: 0,
            zIndex: 9999,

          },
          "+=2"
        );
    }
  }, [location]);// Trigger animation on every route change

  return isLoggedInClient ? (
    <>
      {/* <div ref={loadingRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={Logo} width={200} />
      </div> */}
      <Suspense fallback={<></>}>
        <ClientLayout>
          <Outlet />
          <ToastContainer />
        </ClientLayout>
      </Suspense>
    </>
  ) : (
    <Navigate to="/client/signin" replace />
  );
};

export default ClientRoute;
