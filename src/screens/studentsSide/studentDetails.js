import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/context";
import "./studentDetails.css";

export default function StudentsDetails() {
  const { state, dispatch } = useContext(GlobalContext);

  for (var i = 0; i < state.studentsData.length; i++) {
    return state.authUser.userName === state.studentsData[i].studentName ? (
      <div id="studDet" key={state.studentsData[i].studentName}>
        <br />
        <h1>Your Details</h1>
        <br />
        <h2>Name : {state.studentsData[i].studentName}</h2>
        <br />
        <h2>Roll No : {state.studentsData[i].rollNo}</h2>
        <br />
        <h2>Total Marks : {state.studentsData[i].totalMarks}</h2>
        <br />
        <h2>Grade : {state.studentsData[i].grade}</h2>
        <br />
        <h2>Feeback : {state.studentsData[i].feedback}</h2>
        <br />
      </div>
    ) : (
      <div id="studDet">
        <h2>Details Not Present</h2>
      </div>
    );
  }

  // return state.studentsData.map((a) => {
  //   return state.authUser.userName === a.studentName ? (
  //     // console.log(a);

  //   ) : (

  //   );
  // });
}
