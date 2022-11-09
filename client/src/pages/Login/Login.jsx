import { ErrorMessage, Field, Form, Formik } from 'formik'
import './Login.scss'
import { Link, Navigate } from 'react-router-dom'
import * as Yup from 'yup';
import axios from '../../Api/axios';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';



const initialValue = {
    email: '',
    password: ''
}
const validationSchema = Yup.object({
    email: Yup.string().required('Required').email('Invalid email'),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
})

const Login = () => {
    const { user, setUser } = useContext(authContext)
    const onSubmit = values => {
        console.log(values)
        axios.post('/auth/login',
            values
        ).then(({ data }) => {
            console.log(data)
            setUser(data.user)

        })
    }
    return (
        <div className='login'>
            {user && <Navigate to='/' />}
            <div className="card">
                <div className="left">
                    <h1>All<span>y</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quo! Nihil eaque
                        voluptatibus hic nam molestias sed vel accusantium cum.
                        Repellat quisquam dolore esse deserunt aperiam unde! Dolor,
                        deleniti iure.</p>
                    <span>Don't you have an account</span>
                    <Link to='/register'>
                        <button >Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
                        <Form>
                            <Field name='email' type='text' placeholder='Email' />
                            <ErrorMessage name='email' component='span' className='error-input' />
                            <Field name='password' type='password' placeholder='Password' />
                            <ErrorMessage name='password' component='span' className='error-input' />
                            <button type='submit'  >Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login