import React from "react"
import { Salary } from "./salary/Salary"
import { WageProvider } from "./salary/DataManager"
import { WageList } from "./salary/WageList"
import "./Kyw.css"

export const Kyw = () => (
    <>
        <h2>Know Your Worth</h2>

        <h2>Salary</h2>
        <article className="salary">
            <Salary />
        </article>

        <WageProvider>
            <WageList />
        </WageProvider>
    </>
)
