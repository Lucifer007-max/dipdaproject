import React from 'react'
// import Sidebar from '../components/Sidebar/Sidebar';
// import AdminNavbar from '../components/Navbars/AdminNavbar';
// import AdminFooter from "../components/Footers/AdminFooter";
import { Container } from 'reactstrap';
// import Sidebar from '../components/Sidebar';

const AdminLayout = (props: any) => {
  return (
    <>
      {/* // <Sidebar
      // checkPermission={checkPermission}
      // {...props}
      // routes={routes}
      // logo={{
      //   innerLink: "/admin/dashboard",
      //   imgSrc: require("../assets/img/brand/argon-react.png").default,
      //   imgAlt: "...",
      // }}
      // /> */}
      <div className="main-content" >
        {/* <AdminNavbar name={props.name} /> */}
        <Container>
          {props.children}
          {/* <AdminFooter /> */}
        </Container>
      </div>
    </>
  )
}

export default AdminLayout