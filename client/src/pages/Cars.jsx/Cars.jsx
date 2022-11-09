import React, { useContext } from 'react'
import Cards from '../../component/Cards/Cards'
import { carsContext } from '../../context/CarsContext'
import './Cars.scss'
function Cars() {
    const { cars } = useContext(carsContext)
    console.log(cars)
    return (
        <div className='car_wrapper'>
            {cars.map(e => <Cards name={e.car} rent={e.price} image={e.image} id={e._id} booked={e.booked} />)}
        </div>
    )
}

export default Cars