import React from 'react'
import Header from '../Header'
import Hero from '../../assets/Hero.jpg'


function Section1() {
    return (
        <div>
            {/* <div className='relative z-40' style={{
                backgroundImage: `url(${Hero})`,
                backgroundSize: 'cover',  // Adjust size as per requirement
                backgroundPosition: 'top',  // Ensures the gradient starts from the left
                backgroundRepeat: 'no-repeat',
            }}> */}
                <Header />
            {/* </div> */}
        </div>
    )
}

export default Section1