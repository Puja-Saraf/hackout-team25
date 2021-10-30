import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import { ExpenseTrackerContext } from "../context/context";
import {
  Badge,

  Heading,
 
} from "@chakra-ui/react";

// import { Card } from "../components/Card";
import "./Profilepage.css";
import { useAuth } from "../contexts/AuthContext";
// import { ExpenseTrackerContext } from "../context/context";
export default function Profilepage() {
  const { currentUser } = useAuth();
  const property = {
    imageUrl: currentUser.providerData[0].photoURL
      ? currentUser.providerData[0].photoURL
      : "https://i.pinimg.com/474x/8b/8a/32/8b8a32d2d8c34f5a79fc1ffb0326b753.jpg",
    imageAlt: "Profile Pic of User",
    title: currentUser.providerData[0].displayName
      ? currentUser.providerData[0].displayName
      : "Anonymous",
    userBadge: currentUser.providerData[0].displayName ? "Username" : "Email",
  };
  const str = currentUser.providerData[0].email;
  let i;
  for (i = str.length - 1; i >= 0; i--) {
    if (str[i] === "@") break;
  }
  const username = str.substring(0, i);
  const { transactions} = useContext(ExpenseTrackerContext);
  const transactionsN=transactions.filter(t=>t.uid===currentUser.uid)
  const balance = transactionsN.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );
  // const { balance } = useContext(ExpenseTrackerContext);
  return (
    // <>
    <div style={{ width: "100%" }}>
      <Layout>
        <Heading>
          Profile page
          <Badge colorScheme="green" fontSize="lg" mx={4}>
            Protected Page
          </Badge>
        </Heading>
      </Layout>

      <div
        style={{
          background: "#A2D2FF",
          height: "800px",
          width: "100%",
          overflow: "hidden",
        }}
        className="d-flex justify-content-center pt-3 "
      >
        <div
          className="mt-5 card shadow-lg  mb-5 bg-white rounded"
          style={{
            width: "22rem",
            backgroundColor: "#E5E5E5",
            position: "relative",
            height: "85%",
            // width:"40%"
          }}
        >
          <div className="__header">
            <h1 className="text-center my__Profile">My Profile</h1>
          </div>

          <div className="profileImg d-flex justify-content-center">
            {currentUser.providerData[0].photoURL && (
              <img
                src={property.imageUrl}
                className="rounded-circle "
                style={{ zIndex: "2" }}
                alt="..."
              ></img>
            )}
            {!currentUser.providerData[0].photoURL && (
              <img
                src={property.imageUrl}
                className="rounded-circle "
                style={{ zIndex: "2", width: "50%", height: "110%" }}
                alt="..."
              ></img>
            )}
          </div>
          <div
            className="p-4"
            style={{
              marginTop: "-5%",
              zIndex: "1",
              border: "2px solid #C5C5C5",
              borderRadius: "10px",
              // marginRight: "6%",
              marginLeft: "10%",
              height: "10rem",
              width: "18rem",
              // width:"14rem"
            }}
          >
            <div style={{ color: "#706b6b" }}>
              <div class="d-flex">
                <div class="mr-auto p-2">Name:</div>
                <div class="p-2">{property.title}</div>
              </div>
              <div className="d-flex">
                <div className="mr-auto p-2">Email:</div>
                <div className="p-2" style={{ fontSize: "13px" }}>
                  {currentUser.providerData[0].email}
                </div>
              </div>
              <div className="d-flex">
                <div className="mr-auto p-2">Username:</div>
                <div className="p-2" style={{ fontSize: "13px" }}>
                  {username}
                </div>
              </div>
            </div>
          </div>
          {/* <NavLink
            activeClassName="menu_active"
            className="nav-link"
            to="/expense"
          > */}
            <div
              className="final__items mt-4 p-2 fw-bold"
              style={{ width: "19rem", marginLeft: "6%" }}
            >
              <div className="d-flex">
                <div>Balance :</div>
                <div style={{ marginLeft: "60%" }}>
                  {balance}
                  
                  </div>
              </div>
            </div>
          {/* </NavLink> */}

          <div
            className="final__items mt-4 p-2 fw-bold"
            style={{ width: "19rem", marginLeft: "6%" }}
          >
            <div className="d-flex">
              <div>Todos :</div>
              <div style={{ marginLeft: "70%" }}>6</div>
            </div>
          </div>
          <div
            className="final__items mt-4 p-2 fw-bold"
            style={{ width: "19rem", marginLeft: "6%" }}
          >
            <div className="d-flex">
              <div>Contests :</div>
              <div style={{ marginLeft: "65%" }}>9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}