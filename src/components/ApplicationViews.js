import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            <Route path="/animals">
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>
            </Route>
            
            <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>

            <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            <Route path="/employees">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>
        </>
    )
}


