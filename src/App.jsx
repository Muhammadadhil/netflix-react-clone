// import React from 'react'
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./authentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect hook worked: onAuthStateChanged !!");

        onAuthStateChanged(auth, async (user) => {
            console.log("isUserLoggedIn:", user);
            if (user) {
                console.log("user logged in");
                navigate("/");
            } else {
                console.log("user logged out");
                navigate("/login");
            }
        });
    }, []);

    return (
        <div>
            <ToastContainer theme="dark"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/player/:movieId" element={<Player />} />
            </Routes>
        </div>
    );
};

export default App;
