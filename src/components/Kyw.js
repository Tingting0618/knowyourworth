import React from "react"
import { Salary } from "./salary/Salary"
import "./Kyw.css"

export const Kyw = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Salary</h2>
        <article className="salary">
            <Salary />
            <Salary />
            <Salary />
        </article>
    </>
)
