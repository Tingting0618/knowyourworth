import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from "react"
import { WageContext } from "./DataManager"
import "./Salary.css"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    <>
      <section className="wages">
        <h2>Salary</h2>
        <button onClick={
          () => navigate("/add_my_salary")
        }>
          Add My Salary
        </button>
        <div className="wages">
          <Table className={Table}>
            <TableHead>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell align="right">company</TableCell>
                <TableCell align="right">salary</TableCell>
                <TableCell align="right">work_state</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wages.map(wage => (
                <TableRow key={wage.id}>
                  <TableCell component="th" scope="row">{wage.title}</TableCell>
                  <TableCell align="right">{wage.company}</TableCell>
                  <TableCell align="right">{wage.salary}</TableCell>
                  <TableCell align="right">{wage.work_state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* {
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
        } */}
        </div>
      </section>
    </>
  )
}
