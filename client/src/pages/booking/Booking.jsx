import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../Api/axios'
import img from '../../assets/heroimg.jpeg'
import { carContext } from '../../context/CarContext'
import swal from 'sweetalert'
import './Booking.scss'
const Booking = () => {
    const navigate = useNavigate()
    const { car } = useContext(carContext)
    const onSubmit = (value) => {
        console.log(value)
        swal({
            title: "Are you sure?",
            text: "confirm your slot!",
            icon: "warning",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post('/user/book', { paymentType: value.paymentType, car: car._id }).then(({ data }) => {

                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        }).then(e => {
                            navigate('/thankYou')
                        })
                    })

                } else {
                    swal("You canceled booking!");
                }
            });

    }
    return (
        <div className="booking_wrapper">
            <div className="left_sec">
                <div className="image_container">
                    <img src={`http://localhost:4000/${car.image}`} alt="" />
                </div>
                <div className="description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id saepe laborum perferendis! Neque error dolorum saepe, ipsam, nihil accusamus corrupti placeat maiores esse delectus ducimus quidem ab pariatur tempore fuga.</p>
                </div>
            </div>
            <div className="right_sec">
                <h1>{car.car}</h1>
                <p>{car.model}</p>
                <p>{car.carType}</p>
                <p>{car.owner}</p>
                <p>{car.price}</p>
                <Formik initialValues={{ paymentType: '' }} onSubmit={onSubmit}>
                    <Form>

                        <div className="radio_btns">
                            <Field type="radio" name="paymentType" value="Online" id="" />
                            <label htmlFor="">Online</label>
                        </div>
                        <div className="radio_btns">
                            <Field type="radio" name="paymentType" id="" value="cod" />
                            <label htmlFor="">Cash on delivery</label>
                        </div>

                        <button>
                            Pay
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Booking