import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import { Loader } from "../components/spinner/Loader";

const AdminRoute = ({ isLoggedInAdmin }: any) => {
  return isLoggedInAdmin
    ? (
      <>
        <Suspense fallback={<div className="loader-container" style={{ width: "75vw", height: "75vh" }}>
          <div className="loader-container-inner">
            <div className="text-center">
              <Loader />
            </div>
          </div>
        </div>}>
          <AdminLayout>
            <Container className="pt-4" fluid>
              <Outlet />
            </Container>
            <ToastContainer />
          </AdminLayout>
        </Suspense>
      </>
    )
    : <Navigate to="/admin/signin" replace />;
};

export default AdminRoute;
