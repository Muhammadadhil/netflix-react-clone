// import React from 'react'
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { handleGoogleSignIn, login, signUp } from "../../authentication.js";
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

    const [signInState, setSignInState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading]=useState(false);

    const user_auth = async (event) => {
        setLoading(true);
        event.preventDefault();
        if (signInState == "Sign In") {
            console.log('currently user is not logged in!!!!');
            login(email, password);
        } else {
            console.log("calling sign up method!!");
            signUp(name, email, password);
        }
        setLoading(false);

    };

    return loading ? (
        <div className="login-spinner">
            <img src={netflix_spinner} alt="spinner" />
        </div>
    ) : (
        <div className="login">
            <img src={logo} className="login-logo" alt="" />
            <div className="login-form" alt="">
                <form>
                    <h1>{signInState}</h1>
                    {signInState == "Sign Up" ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" /> : <></>}
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button className="main-button" onClick={user_auth} type="submit">
                        {signInState}
                    </button>
                    <button className="sign-with-google" onClick={handleGoogleSignIn}>
                        Sign In With Google
                    </button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signInState == "Sign In" ? (
                        <p>
                            New to Netflix{" "}
                            <span
                                onClick={() => {
                                    setSignInState("Sign Up");
                                }}
                            >
                                Sign Up Now
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have account? <span onClick={() => setSignInState("Sign In")}>Sign In Now</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
