import './Navbar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import axios from '../../Api/axios';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const { user, setUser } = useContext(authContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        try {
            axios.post('/auth/logout').then(({ data }) => {
                console.log(data)
                setUser(null)
                navigate('/login')
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="navbar">
            <div className="logo">
                <span>Ally</span>
            </div>
            <div className="icons">
                <div className="profile">
                    <AccountCircleIcon />
                    <span>{user.name}</span>
                </div>
                <IconButton onClick={handleLogOut}>
                    <LogoutIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Navbar