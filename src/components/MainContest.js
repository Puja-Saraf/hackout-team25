import React, { useState, useEffect } from "react";
import ContestCard from "./ContestCard";
import { NavLink } from "react-router-dom";

const MainContest = () => {
  // let allContests = ["Hurre"];
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  // const [checked, setChecked] = useState(true);
  // const [checkar, setCheckar] = useState([
  //   "HACKEREARTH",
  //   "CODEFORCES",
  //   "ATCODER",
  //   "CODECHEF",
  // ]);
  function getUsers() {
    let url = "https://contesttrackerapi.herokuapp.com";
    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        for (let i = 0; i < Object.keys(out.result.ongoing).length; i++) {
          let curr = out.result.ongoing[i];

          //  setArticles(articles.concat(curr));
          // if (checkar.includes(curr.Platform)) {
          setArticles((prev) => {
            return [...prev, curr];
          });
          // } else {
          //   continue;
          // }
        }
      });
  }
  function getOtherUsers() {
    let url = "https://contesttrackerapi.herokuapp.com";
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        setLoading(false);
        for (let i = 0; i < Object.keys(out.result.upcoming).length; i++) {
          let curr = out.result.upcoming[i];
          //  setArticles(articles.concat(curr));
          // setUpcoming((prev) => {
          //   return [...prev, curr];
          // });
          // if (checkar.includes(curr.Platform)) {
          setUpcoming((prev) => {
            return [...prev, curr];
          });
          // } else {
          //   continue;
          // }
        }
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getOtherUsers();
  }, []);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <img
          src="../images/collegemate.png"
          alt="logo"
          style={{ height: "70px", marginRight: "10px" }}
        />
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-right mx-5">
            <li className="nav-item ">
              <a className="nav-link" href="#ongoing">
                Ongoing ({articles.length}){" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#upcoming">
                Upcoming ({upcoming.length})
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button onClick={(e)=>{
                  let newar=checkar
                  setChecked(!checked)
                  
                  if(newar.includes(e.target.outerText))
                  {
                    for(var i=0;i<newar.length;i++)
                    {
                      if(newar[i]===e.target.outerText)
                      {
                        newar.splice(i,1);
                      }
                    }
                  }
                  else
                  {
                    newar.push(e.target.outerText)
                  }
                  setCheckar(newar)
                  
                  

                }}>
                <a className="dropdown-item" href="#Hackerearth">
                  {" "}
                  <input
                    type="checkbox"
                    
                    checked={checked ? "true" : "false"}
                  />{" "}
                  <span className="xx">HACKEREARTH</span>
                </a>
                </button>
                <a className="dropdown-item" href="#Codeforces">
                  <input type="checkbox" checked="true" />{" "}
                  <span className="xx"> CODEFORCES</span>
                </a>
                <a className="dropdown-item" href="#Atcoder">
                  <input type="checkbox" checked="true" />{" "}
                  <span className="xx"> ATCODER</span>
                </a>
                <a className="dropdown-item" href="#Codechef">
                  <input type="checkbox" checked="true" />
                  <span className="xx">CODECHEF </span>
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>

      <section id="ongoing">
        <ContestCard users={articles} names="ONGOING CONTESTS" />
      </section>
      <section id="upcoming">
        {loading && <div className="loading">Loading&#8230;</div>}
        <ContestCard users={upcoming} names="UPCOMING CONTESTS" />
      </section>
    </>
  );
};

export default MainContest;
