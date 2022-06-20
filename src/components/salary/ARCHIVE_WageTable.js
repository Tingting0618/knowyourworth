import { useTable, usePagination, useGlobalFilter } from "react-table";
import React, { useContext, useEffect } from "react"
import { WageContext } from "./DataManager"
// A great library for fuzzy filtering/sorting items

// Reference:
// https://codesandbox.io/s/react-table-global-filter-pagination-49w2p?file=/src/App.js

// Our table component
function Table({ columns, data }) {
  const props = useTable(
    {columns,data},
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter }
  } = props;
  console.log(props);
  React.useEffect(() => {
    // props.dispatch({ type: actions.resetPage })
    console.log(globalFilter);
  }, [globalFilter]);

  return (
    <>
      {console.log(globalFilter)}
      <input
        type="text"
        value={globalFilter || ""}
        placeholder="Search: Data Engineer, Google..."
        style={{ width: "300px" }}
        onChange={e => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      <br />
      <div>Showing the first {rows.length} rows</div>
      <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}

export const TableTest = () => { 
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Title",
            accessor: "title",
            filter: "includes"
          },
          {
            Header: "Company",
            accessor: "company",
            filter: "includes"
            // Use our custom `fuzzyText` filter on this column
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Salary",
            accessor: "salary",
            filter: "includes"
          },
          {
            Header: "Year",
            accessor: "year",
            filter: "includes"
          },
          {
            Header: "City",
            accessor: "city",
            filter: "includes"
          },
          {
            Header: "State",
            accessor: "work_state",
            filter: "includes"
          },
          {
            Header: "Source",
            accessor: "source",
            filter: "includes"
          },
        ]
      }
    ],
    []
  );

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

  return (
    <>
      <button onClick={handleReset}>Reset Data</button>
      <Table columns={columns} data={wages} />
    </>
  );
}

