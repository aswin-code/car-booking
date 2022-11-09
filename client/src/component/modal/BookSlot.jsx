import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../../Api/axios';
import { carContext, carsContext } from '../../context/CarsContext';
import { modalContext } from '../../context/ModalContext';
import './BookSlot.scss'
Modal.setAppElement('#root')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        height: '75vh',
        width: '75vh',
        borderRadius: '10px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0'
    },
};
const initialValue = {
    state: '',
}
const BookSlot = () => {
    const { setCars } = useContext(carsContext)
    useEffect(() => {
        axios.get('/user/state').then(({ data }) => {
            setState(data.states)
        })
    }, [])
    const submitState = (value) => {
        console.log(value)
        axios.get(`/user/district/${value.state}`).then(({ data }) => {
            setDistrict(data.districts)
            console.log(data)
        })
    }
    const submitDistrict = (value) => {
        console.log(value)
        axios.get(`/user/cars/${value.district}`).then(({ data }) => {
            localStorage.setItem('cars', JSON.stringify(data.cars))
            setCars(data.cars)
            navigate('/cars')
            console.log(data)
        })
    }
    const navigate = useNavigate()
    const [state, setState] = useState([])
    const [district, setDistrict] = useState(null)
    const { isOpen, setIsOpen } = useContext(modalContext)
    return (

        <Modal onRequestClose={() => setIsOpen(false)} isOpen={isOpen} style={customStyles}>
            <div className="modal_content_wrapper">
                {district ? <h1>select your district</h1> : <h1>select your state</h1>}
                <div className="image">
                    <img src="https://images.pexels.com/photos/32307/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="options">
                    {district ? <Formik initialValues={{ state: '' }} onSubmit={submitDistrict}>
                        <Form>
                            <Field name="district" as="select" className="my-select">
                                <option value="" hidden> choose an option</option>
                                {district.map(e => (<option value={e._id} key={e._id}>{e.district}</option>))}
                            </Field>
                            <button type='submit'>Next</button>
                        </Form>
                    </Formik> : <Formik initialValues={{ district: '' }} onSubmit={submitState}>
                        <Form>
                            <Field name="state" as="select" className="my-select">
                                <option value="" hidden> choose an option</option>
                                {state.map(e => (<option value={e._id} key={e._id}>{e.state}</option>))}
                            </Field>
                            <button type='submit'>Next</button>
                        </Form>
                    </Formik>

                    }

                </div>
            </div>
        </Modal>
    )
}

export default BookSlot
