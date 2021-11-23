import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider" 
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext)
  const history = useHistory()
  const [location, setLocation] = useState({
    name: "",
    address: ""
  });

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value
    // update state
    setLocation(newLocation)
  }

  const handleClickSaveLocation = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const newLocation = {
        name: location.name,
        address: location.address,
      }
      addLocation(newLocation)
        .then(() => history.push("/locations"))
    }
  

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Hire</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Add Location
          </button>
    </form>
  )
}