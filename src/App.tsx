import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientRoute from './routes/ClientRoutes';
import { Home } from './pages/client/Home';
import { lazy } from 'react';
const Contact = lazy(() => import('./pages/client/Contact').then(module => ({ default: module.Contact })));
const About = lazy(() => import('./pages/client/About').then(module => ({ default: module.About})));
const Xray =  lazy(() => import('./pages/client/service/XrayAnalyzers').then(module => ({ default: module.XrayAnalyzers})));
const Gammaray = lazy(() => import('./pages/client/service/Gammaray').then(module => ({ default: module.Gammaray})));
const XRF = lazy(() => import('./pages/client/product/XrfSample').then(module => ({ default: module.XrfSample})));
const App: React.FC  = () => {
  // const isLoggedInAdmin = sessionStorage.getItem("token") !== undefined ? true : false;
  const isLoggedInClient = sessionStorage.getItem("__ct") !== undefined ? true : false;
  // const isLoggedInAgency = sessionStorage.getItem("__at") !== undefined ? true : false;

  return (
    <>
     <BrowserRouter>
      <Routes>
     

        {/* Client Routes */}
        <Route element={<ClientRoute isLoggedInClient={isLoggedInClient} />}>
            <Route index path="/about" key="home" element={<Home />} />
            <Route path="/" key="about" element={<About />} />
            <Route path="/contact" key="contact" element={<Contact />} />
            <Route path="/service/XrayAnalyzer" key="Xray" element={<Xray />} />
            <Route path="/service/Gamma-ray" key="Gamma-ray" element={<Gammaray />} />
            <Route path="/product/xrf-sample" key="xrf" element={<XRF />} />
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
