import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./product.css"
import { Link, useNavigate } from 'react-router-dom';
import { APP_BASE_URL,ASSETS_BASE_URL } from '../../utils/constants';

function ProductDetails() {
    const [getProducts, setGetProducts] = useState([])

    const nav = useNavigate();

    useEffect(() => {
        axios.get(APP_BASE_URL + "getProducts")
            .then((res) => {
                setGetProducts(res?.data)
            }).catch((err) => {

            });
    }, [])


    return (
        <div className='container'>
            <div className='product-title'>
                <div className='top-title'>
                    <label onClick={() => nav('/')}>Home</label> / <span>Products</span>
                </div>
                <h2>PRODUCTS</h2>
            </div>
            <div className='products-main'>
                {
                    getProducts.map((i) => (
                        <div className='outer-div'>
                            <div className='inner-product'>
                                <div className='produtImage'>
                                    <img src={`${ASSETS_BASE_URL}${i.image}`} alt='' />
                                    <div className='productMask'>
                                    {/* <Link to="showproduct" className="add_to_cart_button">showproduct</Link> */}
                                    
                                        <a onClick={() => nav('/showproduct?id='+i._id)} className='add_to_cart_button'>show detail</a>
                                    </div>
                                </div>
                                <div className='productCaption'>
                                    <h2><a href="#">{i.name}</a></h2>
                                    <h3 class="price"><span class="woocommerce-Price-currencySymbol">Rs</span>{i.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductDetails