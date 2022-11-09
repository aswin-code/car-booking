import React from 'react'
import { Link } from 'react-router-dom'
import './Thankyou.scss'

function ThankYou() {
    return (
        <div className="thankyou_wrapper">
            <div className="content">

                <h1>Thank you</h1>
                <Link to='/'>
                    <button >Back to home</button>
                </Link>
            </div>
        </div>
    )
}

export default ThankYou