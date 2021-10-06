import React,{useState ,useContext} from "react";
import { GlobalContext } from "../../context/context";
import './addStudents.css'


export default function Addstudents(){

    const { state, dispatch } = useContext(GlobalContext);

    const addstud = (a) => {
        console.log("newstud", a);
        dispatch({ type: "ADD_STUDENTS_DATA", payload: a });
      };

      let grade;

    const[studentName,setstudentName] = useState('');
    const[rollNo,setRollNo] = useState('');
    const[totalMarks,setTotalMarks] = useState('');
    const[feedback,setFeedback] = useState('');

    const[studentNameError,setstudentNameError] = useState('');
    const[rollNoError,setRollNoError] = useState('');
    const[totalMarksError,setTotalMarksError] = useState('');
    const[FeedbackError,setFeedbackError] = useState('');

    return(
            <div id="addStud">
            <h2>Add Students</h2>
            <br />
            Student Name : <br/><input type="text" value={studentName} onChange={(a)=>{setstudentName(a.target.value)}} className="dataFields" placeholder="Enter Student Name"/>
            <span>{studentNameError}</span>
            <br />
            Roll No : <br/><input type="text" value={rollNo} onChange={(a)=>{setRollNo(a.target.value)}} className="dataFields" placeholder="Enter Roll No"/>
            <span>{rollNoError}</span>
            <br />
            Total Marks (Out of 500): <br/><input type="text" value={totalMarks} onChange={(a)=>{setTotalMarks(a.target.value)}} className="dataFields" placeholder="Enter Total Marks"/>
            <span>{totalMarksError}</span>
            <br />
            Feedback : 
            <br/><textarea value={feedback} onChange={(a)=>{setFeedback(a.target.value)}} className="dataFields feedback" placeholder="Enter Feedback"/>
            <span>{FeedbackError}</span>
            <br/>
            <button id="btn-1" onClick={()=>{
                if(studentName === ""){
                    setstudentNameError('Enter Student Name')
                }
                else if(rollNo === ""){
                    setRollNoError('Enter Roll No')
                }
                else if(totalMarks === ""){
                    setTotalMarksError('Enter Total Mark')
                }
                else if(feedback === ""){
                    setFeedbackError('Select Feedback')
                }
                else{
                    if(totalMarks >= 450){ grade="A+"}
                    else if(totalMarks >= 400){ grade ="A"}
                    else if(totalMarks >= 320){ grade = "B"}
                    else if(totalMarks >= 250){ grade= "C"}
                    else if(totalMarks < 250){ grade ="F"}
                    
                    let newUserObj = {
                        studentName,rollNo,totalMarks,feedback,grade
                    }
                    console.log(grade)
                    addstud(newUserObj)
                }
            }}>Submit</button>
        </div>
    )
}