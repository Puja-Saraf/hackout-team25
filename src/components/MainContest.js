import React, { useState, useEffect,Component } from 'react'
import ContestCard from './ContestCard';
import { NavLink } from "react-router-dom";


const MainContest = () => {

    
    // let allContests = ["Hurre"];
    const [loading,setLoading] = useState(true);
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
         setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(out => {
              setLoading(false);
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Filter
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#Hackerearth"> <input type="checkbox"checked="true"/> <span className="xx">HACKEREARTH</span></a>
          <a className="dropdown-item" href="#Codeforces"><input type="checkbox" checked="true"/> <span className="xx"> CODEFORCES</span></a>
         <a className="dropdown-item" href="#Atcoder"><input type="checkbox" checked="true"/> <span className="xx"> ATCODER</span></a>
         <a className="dropdown-item" href="#Codechef"><input type="checkbox" checked="true"/><span className="xx">CODECHEF </span></a>
        </div>
      </li>
    </ul>
  </div>
</nav>

         <section id="ongoing">
         
        <ContestCard users={articles} names="ONGOING CONTESTS"/>
        </section>
        <section id="upcoming">
        {loading && <div className="loading">Loading&#8230;</div>}
        <ContestCard users={upcoming} names="UPCOMING CONTESTS" />
        </section>
         </>
    )
} 

export default MainContest;