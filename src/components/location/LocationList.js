import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])

  return (
      <>
    <h2>Locations</h2>
    <button onClick={
      () => history.push("/locations/create")
    }>
          Add Location
    </button>
    <section className="locations">
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--${location.id}`} key={`location--${location.id}`}>
              <div className="location__name">
                Name: { location.name }
              </div>
              <div className="location__address">
                Address: { location.address }
              </div>
            </div>
          )
        })
      }
    </section>
    </>
  )
}