import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kyw.css"
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom"

// const AuthCheck = ({ children }) => {
//     if (localStorage.getItem("lu_token")) {
//         return children
//     }
//     else return <Navigate to="/login" />
// }

export const Kyw = () => (
    <>
        <BrowserRouter>
            <Routes>
                {/* <Route path="*" element={<AuthCheck><NavBar /><ApplicationViews /></AuthCheck>} /> */}
                <Route path="*" element={<><NavBar /><ApplicationViews /></>} />
            </Routes>
        </BrowserRouter> 
    </>
)