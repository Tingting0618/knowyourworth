// import React from "react"
// import { Salary } from "./salary/Salary"
// import { WageProvider } from "./salary/DataManager"
// import { WageList } from "./salary/WageList"
// import "./Kyw.css"

// export const Kyw = () => (
//     <>
//         <h2>Know Your Worth</h2>

//         <h2>Salary</h2>
//         <article className="salary">
//             <Salary />
//         </article>

//         <WageProvider>
//             <WageList />
//         </WageProvider>
//     </>
// )

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