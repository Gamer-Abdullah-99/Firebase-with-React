import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import "./studentsTable.css";

export default function StudentsTable() {
  const { state, dispatch } = useContext(GlobalContext);

  const remStud = (a) => {
    dispatch({ type: "REMOVE_STUDENTS_DATA", payload: a });
  };

  return (
    <div id="studTable">
      
      {Object.entries(state.studentsData).length !== 0 &&
        <>
        <br />
        <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Total Marks</th>
            <th>Feedback</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.studentsData.map(
            ({ studentName, rollNo, totalMarks, feedback , grade}) => {
              //   console.log(a);
              return (
                <tr key={studentName}>
                  <td>{studentName}</td>
                  <td>{rollNo}</td>
                  <td>{totalMarks}</td>
                  <td>{feedback}</td>
                  <td>{grade}</td>
                  <td>
                    <button id="btn-2">
                      <FontAwesomeIcon icon={faBan} style={{ color: "red", height: "20px" }} onClick={() => {{remStud(studentName);}}}/>
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <br />
      </> }
      {Object.entries(state.studentsData).length === 0 && <h5 id="error">No Data Present</h5>}
    </div>
  );
}



