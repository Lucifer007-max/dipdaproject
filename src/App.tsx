import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientRoute from './routes/ClientRoutes';
import { Home } from './pages/client/Home';
import { lazy } from 'react';
const About = lazy(() => import('./pages/client/About').then(module => ({ default: module.About })));

const App: React.FC  = () => {
  // const isLoggedInAdmin = sessionStorage.getItem("token") !== undefined ? true : false;
  const isLoggedInClient = sessionStorage.getItem("__ct") !== undefined ? true : false;
  // const isLoggedInAgency = sessionStorage.getItem("__at") !== undefined ? true : false;

  return (
    <>
     <BrowserRouter>
      <Routes>
        {/* <Route element={<PublicRoute />}>
          <Route path="/" element={<Navigate to="/client/signin" replace />} />
          <Route path="/admin/signin" key="signin" element={<Signin />} />
          <Route
            path="/admin/forgotpassword"
            key={"forgetpassword"}
            element={<ForgotPassword />}
          />
          <Route
            path="/admin/resetpassword/:token"
            key="restpassword"
            element={<ResetPassword />}
          />
          <Route
            path="/client/signin"
            key="clientsignin"
            element={<ClientLogin />}
          />
          <Route
            path="/client/signup"
            key="clientsignin1"
            element={<ClientSignUp />}
          />
          <Route
            path="/client/forget-password"
            key="client-forget-password"
            element={<ClientForgetPassword />}
          />
          <Route
            path="/client/reset-password/:token"
            key="client-reset-password"
            element={<ClientRestPassword />}
          />
        </Route> */}

        {/* ADMIN ROUTES */}
        {/* <Route element={<AdminRoute isLoggedInAdmin={isLoggedInAdmin} />}>
          <Route path="admin">
            <Route
              index
              path="dashboard"
              key="dashboard"
              element={<DashBoard />}
            />
            <Route path="client">
              <Route
                index
                path="create"
                key="client-create"
                element={<ClientCreate />}
              />
              <Route
                index
                path="list"
                key="client-list"
                element={<ClientList />}
              />
              <Route
                index
                path="edit/:userId"
                key="client-id"
                element={<ClientCreate />}
              />
            </Route>
            <Route path="admins">
              <Route
                index
                path="create"
                key="client-create"
                element={<AdminCreate />}
              />
              <Route
                index
                path="list"
                key="client-list"
                element={<AdminList />}
              />
              <Route
                index
                path="edit/:userId"
                key="client-id"
                element={<AdminCreate />}
              />
            </Route>
            <Route
              index
              path="permission-management"
              key="permission-list"
              element={<PermissionList />}
            />
            <Route
              index
              path="role-management"
              key="role-list"
              element={<RoleList />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="commission">
              <Route path="default-management" element={<Commission />}></Route>
              <Route
                path="agency-management"
                element={<AgencyCommission />}
              ></Route>
            </Route>

            <Route
              path="recharge-management"
              element={<RechargeList />}
            ></Route>

            <Route
              path="geolocation-management"
              element={<GeoLocation />}
            ></Route>
            <Route path="user-management">
              <Route path="manage-user" element={<ManageUser />}></Route>
              <Route
                path="transaction-history"
                element={<TransactionHistory />}
              ></Route>
              <Route path="user-activity" element={<UserActivity />}></Route>
            </Route>
          </Route>
        </Route> */}

        {/* Client Routes */}
        <Route element={<ClientRoute isLoggedInClient={isLoggedInClient} />}>
            <Route index path="/" key="home" element={<Home />} />
            <Route index path="/about" key="about" element={<About />} />
        </Route>


        {/* 404 ROUTE */}
        <Route
          path="*"
          element={<h1 className="text-center mt-5">404 Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
