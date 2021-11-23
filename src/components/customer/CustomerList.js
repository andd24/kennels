import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    console.log("customerList: useEffect - getCustomers")
    getCustomers()
  }, [getCustomers])

  return (
    <section className="customers">
      {
        customers.map(customer => {
          return (
            <div className="customer" id={`customer--${customer.id}`} key={`customer--${customer.id}`}>
              <div className="customer__name">
                Name: { customer.name }
              </div>
              <div className="customer__address">
                Address: { customer.address }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}