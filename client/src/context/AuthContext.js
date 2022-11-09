import { createContext, useEffect, useState } from "react"

export const authContext = createContext()
const AuthContextProvier = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (
        <authContext.Provider value={{ user, setUser }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvier