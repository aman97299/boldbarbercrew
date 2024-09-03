import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./product.css"
import { useLocation, useNavigate, } from 'react-router-dom';
import { APP_BASE_URL,ASSETS_BASE_URL } from '../../utils/constants';
import MainHeader from '../UI/Header/mainHeader';
function useQuery(){
    const {search} = useLocation();
    return React.useMemo(()=>new URLSearchParams(search),[search]);
  }
function Showproduct() {
    const [getProducts, setGetProducts] = useState([])

    const nav = useNavigate();
    const queryParams = useQuery();


    useEffect(() => {
        // console.log(APP_BASE_URL + `getproductid/"queryParams.get("id")`);
        axios.get(APP_BASE_URL + "getproductid/"+queryParams.get("id"))
            .then((res) => {
                setGetProducts(res?.data)
            }).catch((err) => {

            });
    }, [])
  

    return (
        <div>
            <MainHeader/>
        <div className='container'>
           
            <div className='product-title'>
                <div className='top-title'>
                    <label onClick={() => nav('/')}>Home</label> / <span>Products</span>
                </div>
                <h2>PRODUCTS</h2>
            </div>
            <div className='products-main'>
                {
                
                        <div className='outer-div'>
                            <div className='inner-product'>
                                <div className='produtImage'>
                                    <img src={`${ASSETS_BASE_URL}${getProducts.image}`} alt='' />
                                </div>
                                <div className='productCaption'>
                                    <h2><a href="#">{getProducts.name}</a></h2>
                                    <p>{getProducts.description}</p>
                                    <h3 class="price"><span class="woocommerce-Price-currencySymbol">Rs</span>{getProducts.price}</h3>
                                </div>
                            </div>
                           
                            <div className="d-flex justify-content-center btn-group">
                                <button className="btn btn-info btn-lg" onClick={() => nav('/AddToCart?id='+queryParams.get("id"))}> addToCart</button>
                                <button className="btn btn-info btn-lg">BuyNow</button>
                            </div>
                        </div>
                    
                }
            </div>
    
        </div>
        </div>
    )
}

export default Showproduct
