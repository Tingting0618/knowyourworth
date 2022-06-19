import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from "react"
import { WageContext } from "./DataManager"
import "./Salary.css"

export const WageList = () => {
  // This state changes when `getWages()` is invoked below
  const { wages, getWages } = useContext(WageContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("WageList: useEffect - getWages")
    getWages()
  }, [])

  const navigate = useNavigate();

  return (
    <section className="wages">
      <h2>Salary</h2>
      <button onClick={
        () => navigate("/add_my_salary")
      }>
        Add My Salary
      </button>
      <div className="animals">
        {
          wages.map(wage => {
            return (
              <div className="wage" id={`wage--${wage.id}`}>
                <div className="wage__title">
                  title: {wage.title}
                </div>
                <div className="wage__company">
                  company: {wage.company}
                </div>
              </div>
            )
          })
        }
        </div>
    </section>
  )
}