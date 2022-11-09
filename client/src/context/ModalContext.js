import React, { createContext, useState } from 'react'

export const modalContext = createContext()
const ModalContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <modalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </modalContext.Provider>
    )
}

export default ModalContextProvider