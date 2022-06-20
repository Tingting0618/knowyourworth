import React, { useEffect, useMemo,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {WageContext} from './DataManager'
import {
  Container,
} from 'reactstrap';
import TableContainer from './TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter } from './filters';

const WageTable = () => {

  // This state changes when `getWages()` is invoked below
  const { wages, getWages } = useContext(WageContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("WageList: useEffect - getWages")
    getWages()
  }, [])
  const handleReset = () => {
    getWages()
  };
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        Header: 'Job Title',
        accessor: 'title',
        // disableSortBy: true,
        // Filter: SelectColumnFilter,
        // filter: 'equals',
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Salary',
        accessor: 'salary',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'work_state',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Source',
        accessor: 'source',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
    ],
    []
  );

  return (
    <>
    <h2>Know Your Worth. App</h2>
    <h6>Our mission is to break down barriers, increase transparency, and make salary negotiation easier.</h6>
    <Container style={{ marginTop: 30 }}>
    <button className="btn btn-primary btn-sm"  onClick={handleReset}>Reset Filter</button>
    <button className="btn btn-outline-success btn-sm"  onClick={
          () => navigate("/add_my_salary")
        }>
          Add My Salary (anonymously ofc!)
        </button>
      <TableContainer
        columns={columns}
        data={wages}
      />
    </Container>
    </>
  );
};

export default WageTable;