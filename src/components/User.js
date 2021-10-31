import React from "react";
// import logo from "../images/logo.jpg"
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

function User() {
  const { currentUser } = useAuth();
  console.log(currentUser.providerData[0].photoURL);
  const str = currentUser.providerData[0].email;
  let i;
  for (i = str.length - 1; i >= 0; i--) {
    if (str[i] === "@") break;
  }
  const username = str.substring(0, i);
  const logo = currentUser.providerData[0].photoURL
    ? currentUser.providerData[0].photoURL
    : "https://i.pinimg.com/474x/8b/8a/32/8b8a32d2d8c34f5a79fc1ffb0326b753.jpg";
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          fontWeight: "700",
          top: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <i className="fa fa-home fa-2x" style={{color:"#c9acc8"}}></i> */}
        <img src="./images/collegemate.png" alt="logo" style={{ height: "50px" }} />
        &nbsp;
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
      </div>
      <div className="User">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="info">
          <p>{username}</p>
        </div>
      </div>
    </>
  );
}
export default User;
