import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import './Navbar.css'

export function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div className="container-fluid">
              <img src="../images/collegemate.png" style={{height:"70px", marginRight:"10px"}}/>
                <NavLink activeClassName="" className="navbar-brand" to="/">
                  Home
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {!currentUser && (
                      <li className="nav-item">
                        <NavLink
                          exact
                          activeClassName="menu_active"
                          className="nav-link active"
                          aria-current="page"
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </li>
                    )}
                    {!currentUser && (
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/register"
                        >
                          Register
                        </NavLink>
                      </li>
                    )}
                    {currentUser && (
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/profile"
                        >
                          Profile
                        </NavLink>
                      </li>
                    )}
                    {currentUser && (
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/todo"
                        >
                          ActivityLog
                        </NavLink>
                      </li>
                    )}
                    {currentUser && (
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/expense"
                        >
                          Expenses
                        </NavLink>
                      </li>
                    )}
                    {currentUser && (
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/contests"
                        >
                          Contests
                        </NavLink>
                      </li>
                    )}
                    {currentUser && (
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/logout"
                          onClick={async (e) => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          Logout
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
