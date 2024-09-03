/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MainHeader from '../../UI/Header/mainHeader'
import MainScreenCrousel from './mianScreenCrousel'
import "../homeScreen.css"
import SpaInfo from './spaInfoScreen'
import ExclusiveServices from './exclusiveServicesScreen'
import CustomerReviews from './customerReviews'


import ContactUs from './contactUs'
import CategoryComponent from './categoryComponent'
import Footer from '../../UI/Footer'

const HomeV1Screen = () => {
    return (
        <div>
            <MainHeader />
            <MainScreenCrousel />
            <SpaInfo />
            <ExclusiveServices />
            <CategoryComponent />
            <CustomerReviews />
         
            <ContactUs />
            <div className='bottom-line'>
                <div onClick={() => { window.scrollTo(0, 0) }} className='inner-bottom-content'>
                    &#x2191;
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeV1Screen