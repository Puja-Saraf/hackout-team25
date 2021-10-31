import React, { useContext } from "react";
import Todo from "./Todo";
import Next7Days from "./Next7Days";
import { TodoContext } from "../context";
import { useAuth } from "../contexts/AuthContext";

function Todos() {
  const { todos, selectedProject } = useContext(TodoContext);
  const { currentUser } = useAuth();
  const todoNew = todos.filter((todo) => todo.uid === currentUser.uid);

  return (
    <div className="Todos">
      <div className="selected-project">{selectedProject}</div>
      <div className="todos">
        {selectedProject === "This Week" ? (
          <Next7Days todos={todoNew} />
        ) : (
          todoNew.map((todo) => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
}

export default Todos;
