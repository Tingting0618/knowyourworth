import React, { useContext, useEffect, useState } from "react"
import { WageContext } from "./DataManager"
import "./Salary"
import { useNavigate } from 'react-router-dom';
// https://github.com/nashville-software-school/client-side-mastery/blob/e-15/book-6-nashville-kennels/chapters/FORMS_CONTROLLED_COMPONENT.md

export const WageForm = () => {
    const { addWage } = useContext(WageContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  
    Define the intial state of the form inputs with useState()
    */

    const [wage, setWage] = useState({
        title: "",
        company: "",
        // salary: 0,
        // work_state: "",
        // year: 0
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


        const newWage = {
            title: wage.name,
            company: wage.breed,
            salary: "wage.salary",
            work_state: "work_state",
            // year: wage.year

        }
        addWage(newWage)
            .then(() => navigate("/"))
    }

    return (
        <form className="wageForm">
            <h2 className="wageForm__title">New Wage</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Wage name:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Wage title" value={wage.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Wage company:</label>
                    <input type="text" id="company" required autoFocus className="form-control" placeholder="Wage company" value={wage.company} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            {/* <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select name="customer" id="customerId" className="form-control" value={wage.customerId} onChange={handleControlledInputChange}>
            <option value="0">Select a customer</option>
            {customers.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset> */}
            <button className="btn btn-primary" onClick={handleClickSaveWage}>
                Save Wage
            </button>
        </form>
    )
}