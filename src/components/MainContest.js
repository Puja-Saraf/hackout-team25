import React, { useState, useEffect,Component } from 'react'
import ContestCard from './ContestCard';
import { NavLink } from "react-router-dom";

const MainContest = () => {

    
    // let allContests = ["Hurre"];
    const [articles, setArticles] = useState([]);
    const [upcoming,setUpcoming] = useState([]);
    function getUsers() {
        let url = 'https://contesttrackerapi.herokuapp.com';
        fetch(url)
            .then(res => res.json())
            .then(out => {
                for (let i = 0; i < Object.keys(out.result.ongoing).length; i++) {
                    let curr = out.result.ongoing[i];
                  //  setArticles(articles.concat(curr));
                  setArticles((prev)=>{
                      return [...prev,curr];
                  })
                }
            })
    }
    function getOtherUsers() {
        let url = 'https://contesttrackerapi.herokuapp.com';
        fetch(url)
            .then(res => res.json())
            .then(out => {
                for (let i = 0; i < Object.keys(out.result.upcoming).length; i++) {
                    let curr = out.result.upcoming[i];
                  //  setArticles(articles.concat(curr));
                  setUpcoming((prev)=>{
                      return [...prev,curr];
                  })
                }
            })
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
  <NavLink className="navbar-brand" to="/">Home</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav navbar-right mx-5">
      <li className="nav-item ">
        <a className="nav-link" href="#ongoing">Ongoing <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#upcoming">Upcoming</a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Filter
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#Hackerearth">HACKEREARTH</a>
          <a class="dropdown-item" href="#Codeforces">CODEFORCES</a>
          <a class="dropdown-item" href="#Atcoder">ATCODER</a>
          <a class="dropdown-item" href="#Codechef">CODECHEF</a>
        </div>
      </li> */}
    </ul>
  </div>
</nav>
         <section id="ongoing">
        <ContestCard users={articles} names="ONGOING CONTESTS"/>
        </section>
        <section id="upcoming">
        <ContestCard users={upcoming} names="UPCOMING CONTESTS" />
        </section>
         </>
    )
} 

export default MainContest;