
import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Loader } from '../components/spinner/Loader';
const PublicRoute = ({ component: RouteComponent }: any) => {
  const token = sessionStorage.getItem("token");

  return token
    ? <Navigate to="/admin/dashboard" replace />
    : (
      <Suspense fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <div className="text-center">
              <Loader />
            </div>
          </div>
        </div>
      }>
        <Outlet />
      </Suspense>
    );
}

export default PublicRoute
