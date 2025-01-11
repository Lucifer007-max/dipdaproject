import React from "react";
import AuthFooter from "../components/Footers/AuthFooter";

const AuthLayout = (props) => {
  return (
    <>
      <div className="main-content" >
        <div className="header bg-gradient-info" style={{height:"100vh"}}>
          {props.children}
          <AuthFooter />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
