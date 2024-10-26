import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Course from "./Components/Course"; // Import your other components here
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

const App = () => {
    // using of context api for creating protected routes
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser);
    return (
        <div className="dark:bg-slate-900 dark:text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/courses"
                    element={authUser ? <Course /> : <Navigate to="/signup" />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Toaster />
        </div>
    );
};

export default App;
