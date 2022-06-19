import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import { WageProvider } from "./salary/DataManager"
import { WageList } from "./salary/WageList"
import { WageForm } from "./salary/WageForm"

export const ApplicationViews = () => {
    return (
        <>
            <WageProvider>
                <Routes>
                    <Route path="/" element={<WageList />}/>
                </Routes>

                <Routes>
                    <Route path="/login" element={<WageList />}/>
                </Routes>

                <Routes>
                    <Route path="/add_my_salary" element={<WageForm />}/>
                </Routes>

            </WageProvider>
        </>
    )
}