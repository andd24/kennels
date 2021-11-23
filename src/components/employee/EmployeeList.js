import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const history = useHistory()

  useEffect(() => {
    console.log("employeeList: useEffect - getemployees")
    getEmployees()
  }, [])

  return (
      <>
    <h2>Employees</h2>
    <button onClick={
      () => history.push("/employees/create")
    }>
          Add Employee
    </button>
    <section className="employees">
      {
        employees.map(employee => {
          return (
            <div className="employee" id={`employee--${employee.id}`} key={`employee--${employee.id}`}>
              <div className="employee__name">
                Name: { employee.name }
              </div>
              <div className="employee__location">
                Location: { employee.location.name }
              </div>
            </div>
          )
        })
      }
    </section>
    </>
  )
}