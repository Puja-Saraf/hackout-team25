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

const quotes=["'It's not enough to be busy, so are the ants. The question is, what are we busy about?' -- Henry David Thoreau",
"'The key is in not spending time, but in investing it.' -- Stephen R. Covey",
"'Time is more valuable than money. You can get more money, but you cannot get more time.' - Jim Rohn",
"The shorter way to do many things is to only do one thing at a time.' - Mozart",
"'Better to be three hours too soon, than a minute too late.' - William Shakespeare",
"'Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.' - Mother Teresa",
"'Don't be fooled by the calendar. There are only as many days in the year as you make use of. One man gets only a week's value out of a year while another man gets a full year's value out of a week.' -- Charles Richards",
"'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.' - Abraham Lincoln",
"'One reason so few of us achieve what we truly want is that we never direct our focus; we never concentrate our power. Most people dabble their way through life, never deciding to master anything in particular.' - Tony Robbins",
"'The common man is not concerned about the passage of time, the man of talent is driven by it.' -- Shoppenhauer",
"'Take care of the minutes and the hours will take care of themselves.' - Lord Chesterfield",
"'Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.' -- Thomas Jefferson",
"'Once you have mastered time, you will understand how true it is that most people overestimate what they can accomplish in a year - and underestimate what they can achieve in a decade!' -- Tony Robbins",
"'To do two things at once is to do neither.' -- Publius Syrus",
"'He who know most grieves most for wasted time.' -- Dante",
"'Time is really the only capital that any human being has, and the only thing he can't afford to lose.' -- Thomas Edison",
"'Most of us spend too much time on what is urgent, and not enough time on what is important.' - Steven Covey",
"'Your future is created by what you do today, not tomorrow.' - Anonymous",
"'The bad news is time flies. The good news is you're the pilot.' -- Michael Altshuler",
"'The best thing about the future is that it comes one day at a time.' - Abraham Lincoln",
"'I must govern the clock, not be governed by it.' - Golda Meir"]

const temp=Math.round(Math.random()*quotes.length);

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
            <div style={{ textAlign:"center", margin:"10% 4% 0", fontStyle:"italic", fontWeight:"bold", color:"#a32dad"}}>
              {quotes[temp]}
            </div>
          {/* </NavLink> */}

          {/* <div
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
          </div> */}
        </div>
      </div>
    </div>
  );
}