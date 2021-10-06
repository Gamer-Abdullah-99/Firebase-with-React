import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/context";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../configs/fire";
import './login.css'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    let history = useHistory();

    const { state, dispatch } = useContext(GlobalContext);

    const login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User logged In")
                console.log(userCredential)
                history.push('/addstud')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div id="login">
            <h2>Login</h2>
            <br />
            Email : <input type="email" value={email} placeholder="Enter Your Email" onChange={(a) => { setEmail(a.target.value) }} />
            <span>{emailError}</span>
            <br />
            Password : <input type="password" value={password} placeholder="Enter Your Password" onChange={(a) => { setPassword(a.target.value) }} />
            <span>{passwordError}</span>
            <br />
            <button id="btn-1" onClick={() => {
                if (email === "") {
                    setEmailError('Enter Email')
                }
                else if (password === "") {
                    setPasswordError('Enter Password')
                }
                else if (email !== "" && password !== "") {
                    let user = { email, password }
                    login()
                }
            }}>Submit</button>
            <br />
            <h5>Click here to <Link to="/">SignUp</Link></h5>
        </div>
    )
}