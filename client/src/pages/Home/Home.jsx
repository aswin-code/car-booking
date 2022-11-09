import { useContext } from 'react'
import BookSlot from '../../component/modal/BookSlot'
import { modalContext } from '../../context/ModalContext'
import './Home.scss'

const Home = () => {
    const { setIsOpen } = useContext(modalContext)
    return (
        <div className="hero_section">
            <div className="hero_content">
                <div className="hero_text">
                    <h1>Drive of your Life.</h1>
                    <p>Search and find your best car rental with easy way</p>
                    <a href='#booking'>
                        <button className='hero_btn' onClick={() => setIsOpen(true)}>Booking Now</button>
                    </a>
                </div>
            </div>
            <BookSlot />
        </div>
    )
}

export default Home