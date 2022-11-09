import React, { createContext, useState } from 'react'

export const carsContext = createContext()
const CarsContextProvider = ({ children }) => {
    const [cars, setCars] = useState(JSON.parse(localStorage.getItem('cars')) || [])
    return (
        <carsContext.Provider value={{ cars, setCars }}>
            {children}
        </carsContext.Provider>
    )
}
export default CarsContextProvider

