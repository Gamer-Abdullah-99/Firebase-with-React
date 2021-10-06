import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/context";
import { Link, useHistory } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../configs/fire";
import './signup.css'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [roleError, setRoleError] = useState('');

    let history = useHistory();

    // const { state, dispatch } = useContext(GlobalContext);

    const signUp = async (a) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User Signed In")
                console.log(userCredential)
                history.push("/login");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    };

    return (
        <div id="signup">
            <h2>Sign Up</h2>
            <br />
            {/* Username : <br /><input type="text" value={username} onChange={(a) => { setUsername(a.target.value) }} className="dataFields" placeholder="Enter Your Username" />
            <span>{usernameError}</span>
            <br /> */}
            Email : <br /><input type="email" value={email} onChange={(a) => { setEmail(a.target.value) }} className="dataFields" placeholder="Enter Your Email" />
            <span>{emailError}</span>
            <br />
            Password : <br /><input type="password" value={password} onChange={(a) => { setPassword(a.target.value) }} className="dataFields" placeholder="Enter Your Password" />
            <span>{passwordError}</span>
            <br />
            {/* Role :
            <label id="radio"><input type="radio" value="teacher" name="role" onChange={(a) => { setRole(a.target.value) }} />Teacher </label>
            <label id="radio"><input type="radio" value="student" name="role" onChange={(a) => { setRole(a.target.value) }} />Student </label>
            <span>{roleError}</span>
            <br /> */}
            <button id="btn-1" onClick={() => {
                // if (username === "") {
                //     setUsernameError('Enter User Name')
                // }
                if (email === "") {
                    setEmailError('Enter Email')
                }
                else if (password === "") {
                    setPasswordError('Enter Password')
                }
                // else if (role === "") {
                //     setRoleError('Select Role')
                // }
                else {
                    signUp()
                }
            }}>Submit</button>
            <br />
            <h5>Click here to <Link to="/login">Login</Link></h5>
        </div>
    )
}
