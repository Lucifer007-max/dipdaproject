import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/client/Home';
import { lazy } from 'react';
import ClientRoute from './routes/ClientRoutes';

const Contact = lazy(() => import('./pages/client/Contact').then(module => ({ default: module.Contact })));
const About = lazy(() => import('./pages/client/About').then(module => ({ default: module.About })));
const XRAYAnalyzer = lazy(() => import('./pages/client/service/XrayAnalyzers').then(module => ({ default: module.XrayAnalyzers })));
const PGNAAAnalyzer = lazy(() => import('./pages/client/service/Gammaray').then(module => ({ default: module.Gammaray })));
const XRF = lazy(() => import('./pages/client/product/XrfSample').then(module => ({ default: module.XrfSample })));
const Traning = lazy(() => import('./pages/client/Traning').then(module => ({ default: module.Traning })));

const Network = lazy(() => import('./pages/client/Network').then(module => ({ default: module.Network })));
const App: React.FC = () => {
  // const isLoggedInAdmin = sessionStorage.getItem("token") !== undefined ? true : false;
  const isLoggedInClient = sessionStorage.getItem("__ct") !== undefined ? true : false;
  // const isLoggedInAgency = sessionStorage.getItem("__at") !== undefined ? true : false;

  return (
    <>
      <BrowserRouter>
        <Routes>


          {/* Client Routes */}
          <Route element={<ClientRoute isLoggedInClient={isLoggedInClient} />}>
            <Route index path="/" key="home" element={<Home />} />
            <Route path="/about" key="about" element={<About />} />
            <Route path="/contact" key="contact" element={<Contact />} />
            <Route path="/service/xray-analyzer" key="xray-analyzer" element={<XRAYAnalyzer />} />
            <Route path="/service/pgnaa-analyzer" key="pgnaa-analyzer" element={<PGNAAAnalyzer />} />
            <Route path="/product/xrf-sample-preperation-product" key="xrf-sample-preperation-product" element={<XRF />} />
            {/* <Route path="/product/radiation-isotope-products" key="radiation-isotope-products" element={<XRF />} /> */}

            <Route path="/training" key="training" element={<Traning />} />
            <Route path="/network" key="network" element={<Network />} />
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
