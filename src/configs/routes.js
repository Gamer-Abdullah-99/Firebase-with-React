import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/navbar";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Addstudents from "../screens/teacherSide/addStudents";
import StudentsTable from "../screens/teacherSide/studentsTable";
import StudentsDetails from "../screens/studentsSide/studentDetails";

export default function Routes() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <Router>
      <div>
        {(Object.entries(state.authUser).length !== 0 && <Nav />)}
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addstud">
            <Addstudents />
          </Route>
          <Route path="/studtable">
            <StudentsTable />
          </Route>
          <Route path="/studdetails">
            <StudentsDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
