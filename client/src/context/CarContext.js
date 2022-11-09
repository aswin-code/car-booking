import React, { createContext, useState } from 'react'

export const carContext = createContext()
const CarContextProvider = ({ children }) => {
    const [car, setCar] = useState(JSON.parse(localStorage.getItem('car')) || [])
    return (
        <carContext.Provider value={{ car, setCar }}>
            {children}
        </carContext.Provider>
    )
}
export default CarContextProvider

