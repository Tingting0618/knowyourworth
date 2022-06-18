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


  return (
    <section className="wages">
      {
        wages.map(wage => {
          return (
            <div className="wage" id={`wage--${wage.id}`}>
              <div className="wage__title">
              title: { wage.title }
              </div>
              <div className="wage__company">
              company: { wage.company }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}