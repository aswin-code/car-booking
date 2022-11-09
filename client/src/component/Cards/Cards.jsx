import React, { useContext } from 'react'
import './cards.scss'
import { useNavigate } from 'react-router-dom'
import axios from '../../Api/axios'
import { carContext } from '../../context/CarContext'


const CarCard = ({ name, rent, image, id, booked }) => {
    const { setCar } = useContext(carContext)
    const navigate = useNavigate()
    const hanldeSubmit = () => {
        console.log('worked')
        axios.get(`/user/car/${id}`).then(({ data }) => {
            localStorage.setItem('car', JSON.stringify(data))
            setCar(data)
            navigate('/booking')
        })
    }
    return (
        <div className="single_car_card">
            <div className="top_section">
                <img src={`http://localhost:4000/${image}`} alt="" />
            </div>
            <div className="bottom_section">
                <div className="details_sec">
                    <h4>{name}</h4>
                    <h6>{rent}/Day</h6>
                </div>
                <div className="btn_sec">
                    {booked ? <p>Not available</p> : <button onClick={hanldeSubmit}>Book Now</button>}
                </div>
            </div>
        </div>
    )
}

export default CarCard