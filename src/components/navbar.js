import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";
import "./navbar.css";

function Nav() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  const logout = () => {
    console.log(state.authUser);
    dispatch({ type: "SIGNOUT_USER" });
    history.push("/");
  };
  // (state.authUser.role === "teacher")? console.log("teacher")

  return (
    <nav>
      <ul>
        {state.authUser.role === "teacher" && (
          <>
            <li>
              <Link to="/addstud">Add Students</Link>
            </li>
            <li>
              <Link to="/studtable">Student Table</Link>
            </li>
            <li onClick={logout}>Log Out</li>
          </>
        )}
        {state.authUser.role === "student" && (
          <>
            <li>
              <Link to="/studdetails">Student Details</Link>
            </li>
            <li onClick={logout}>Log Out</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
