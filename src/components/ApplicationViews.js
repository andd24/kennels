import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { Animal } from "./animal/Animal"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
            </Route>

            <AnimalProvider>
            <LocationProvider>
            <CustomerProvider>
            <EmployeeProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                <Route exact path="/animals/create">
                    <AnimalForm />
                </Route>  

                <Route exact path="/animals/animal/:animalId(\d+)">
                    <Animal />
                </Route>

                <Route exact path="/locations">
                    <LocationList />
                </Route>  
                
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route> 

                <Route path="/customers">
                    <CustomerList />
                </Route>

                <Route exact path="/employees">
                    <EmployeeList />
                </Route>

                <Route exact path="/employees/create">
                    <EmployeeForm />
                </Route>
            </EmployeeProvider>
            </CustomerProvider>
            </LocationProvider>
            </AnimalProvider>
            
        </>
    )
}


