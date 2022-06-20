import React, { useContext, useState } from "react"
import { WageContext } from "./DataManager"
import { useNavigate } from 'react-router-dom';
import "./WageTable.css"

export const WageForm = () => {
    const { addWage } = useContext(WageContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  
    Define the intial state of the form inputs with useState()
    */

    const [wage, setWage] = useState({
        title: "",
        company: "",
        salary: "",
        city: "",
        work_state: "",
        year: 2022,
        source: "User submission"
    });

    const navigate = useNavigate();

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newWage = { ...wage }
        /* Wage is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newWage[event.target.id] = event.target.value
        // update state
        setWage(newWage)
    }

    const handleClickSaveWage = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        if (wage.title === "" || wage.salary === "" || parseInt(wage.salary)<=10000 ) {
            window.alert("Please input a valid job title and annual salary")
        } else {
            const newWage = {
                title: wage.title,
                company: wage.company,
                salary: wage.salary,
                city: wage.city,
                work_state: wage.work_state,
                year: wage.year,
                source: "User submission"

            }
            addWage(newWage)
                .then(() => navigate("/"))
        }
    }

    return (
        <form className="wageForm">
            <h3 className="wageForm__title">Add my salary</h3>
            <h6>Thanks for your anonymous contribution to help other people out there!</h6>
            <br/>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Job Title:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Your job title" value={wage.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Company:</label>
                    <input type="text" id="company" required autoFocus className="form-control" placeholder="Your company company" value={wage.company} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="salary">Salary:</label>
                    <input type="number" id="salary" required autoFocus className="form-control" placeholder="Your annual base salary" value={wage.salary} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" required autoFocus className="form-control" placeholder="Year" value={wage.year} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" required autoFocus className="form-control" placeholder="Work Site City" value={wage.city} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">State:</label>
                    <input type="text" id="work_state" required autoFocus className="form-control" placeholder="Work Site State" value={wage.work_state} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <button className="btn btn-success mt-3"  onClick={handleClickSaveWage}>
                Complete
            </button>
        </form>
    )
}