import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClientLayout from "../layouts/ClientLayout";
import { Loader } from "../components/spinner/Loader";
const ClientRoute = ({ isLoggedInClient }: any) => {

  return isLoggedInClient ?
    (
      <>
        <Suspense fallback={<div className="loader-container" style={{ width: "75vw", height: "75vh" }}>
          <div className="loader-container-inner">
            <div className="text-center">
              <Loader />
            </div>
          </div>
        </div>}>
          <ClientLayout>
            <Outlet />
            <ToastContainer />
          </ClientLayout>
        </Suspense>
      </>
    )
    : <Navigate to="/client/signin" replace />;
};

export default ClientRoute;
