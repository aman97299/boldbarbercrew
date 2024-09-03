import React from 'react'
import MainHeader from '../UI/Header/mainHeader'
import ProductDetails from './productDetails'

function ProductsView() {
    return (
        <div>
            <MainHeader />
            <ProductDetails />
            <div className='bottom-line'>
                <div onClick={() => { window.scrollTo(0, 0) }} className='inner-bottom-content'>
                    &#x2191;
                </div>
            </div>
        </div>
    )
}

export default ProductsView