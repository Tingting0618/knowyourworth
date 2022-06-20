import React from "react"
import { Route, Routes } from "react-router-dom"
import { WageProvider } from "./salary/DataManager"
import { WageForm } from "./salary/WageForm"
import WageTable from "./salary/WageTable"

export const ApplicationViews = () => {
    return (
        <>
            <WageProvider>
                {/* <Routes>
                    <Route path="/login" element={<WageList />}/>
                </Routes> */}

                <Routes>
                    <Route path="/add_my_salary" element={<WageForm />}/>
                </Routes>


                <Routes>
                    <Route path="/" element={<WageTable />}/>
                </Routes>


            </WageProvider>
        </>
    )
}