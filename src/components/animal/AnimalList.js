import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { Link } from "react-router-dom"


export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Add Animal
            </button>

            <div className="animals">
                {
                    animals.map(animal => <Link to={`/animals/animal/${animal.id}`}>
                          { animal.name }
                        </Link>
                    )
                }
            </div>
        </>
    )
}

