import React from "react";
import { Layout } from "../components/Layout";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div style={{ backgroundColor: "#FFE3FE" }}>
      <Layout />
      <h1 class="name">College Mate!</h1>
      <div class="quote">
        "Let our advance worrying become advance thinking and planning."
        <br />- Winston Churchill
      </div>
      <div class="home">
        <img class="home-img" src="/images/amico.svg" alt="" />
        <div class="desc">
          Welcome to <span class="dec">College Mate!</span>
          <br />
          <br />
          Our app has 3 amazing components that will make your college life much
          much easier!
          <ul class="a">
            <li class="b">
              An <span class="dec">Activity Log</span> where in you can save all
              your pending tasks and view them on the fly. Completing them gives
              you a sense of accomplishment.
            </li>
            <li class="b">
              An <span class="dec">Expense Tracker</span> to track all your
              income.It will help you to plan your expenses accordingly. No more
              waiting for the start of the month to plan a party!
            </li>
            <li class="b">
              Oh damn i missed this contest again!! Ever been through this? Dont
              worry we got you covered with our{" "}
              <span class="dec">Contest Tracker App</span> that will give you
              the list of all the ongoing as well as upcoming contests in so
              that you wont miss any contests!
            </li>
          </ul>
        </div>
      </div>
      <footer>
        Made with ❤<br />
        by <span className="teamName">Team Tech Phantoms</span>
      </footer>
    </div>
  );
}
