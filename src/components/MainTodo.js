import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Projects from "./Projects";
import User from "./User";
import AddNewTodo from "./AddNewTodo";
import Calendar from "./Calendar";
import EditTodo from "./EditTodo";
import Todos from "./Todos";
export default function MainTodo() {
  return (
    <div className="whole">
      <div class="nav">
        <label for="toggle" className="tog">
          &#9776;
        </label>
        <div className="MainTodo">
          <input type="checkbox" id="toggle" class="" />
          <div class="menu">
            <Sidebar>
              <User />
              <AddNewTodo />
              <Calendar />
              <Projects />
            </Sidebar>
          </div>
          <Main>
            <Todos />
            <EditTodo />
          </Main>
        </div>
      </div>
    </div>
  );
}
