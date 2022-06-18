import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const WageContext = createContext()

// This component establishes what data can be used.
export const WageProvider = (props) => {
    const [wages, setWages] = useState([])

    const getWages = () => {
        return fetch("http://localhost:8088/wages?")
        .then(res => res.json())
        .then(setWages)
    }

    const addWage = wageObj => {
        return fetch("http://localhost:8088/wages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wageObj)
        })
        .then(getWages)
    }

    /*
        You return a context provider which has the
        `wages` state, `getWages` function,
        and the `addWage` function as keys. This
        allows any child elements to access them.
    */
    return (
        <WageContext.Provider value={{
            wages, getWages, addWage
        }}>
            {props.children}
        </WageContext.Provider>
    )
}