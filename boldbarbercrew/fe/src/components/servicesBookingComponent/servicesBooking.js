import React from 'react'
import MainHeader from '../UI/Header/mainHeader'
import MainTitle from './mainTitle'
import ServicesBookingDetails from './servicesBookingDetails'

function ServicesBookingForm() {
    return (
        <div>
            <MainHeader />
            <MainTitle />
            <ServicesBookingDetails />
            <div className='bottom-line'>
                <div onClick={() => { window.scrollTo(0, 0) }} className='inner-bottom-content'>
                    &#x2191;
                </div>
            </div>
        </div>
    )
}

export default ServicesBookingForm