import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { APP_BASE_URL, ASSETS_BASE_URL } from '../../../utils/constants';

function CategoryComponent() {
    const [getCategory, setGetCategory] = useState([])
    useEffect(() => {
        axios.get(APP_BASE_URL + "getCategories")
            .then((res) => {
                setGetCategory(res?.data)
            }).catch((err) => {
                console.log("error", err);
            });
    }, [])

    return (
        <div className='offer-screen'>
            <div className='container'>
                <div className='offerSection'>
                    <div className='container-fluid'>
                        <div className='content-main-div'>
                            {
                                getCategory?.map((item) => (
                                    <div className='offer-content-main' key={item._id}>
                                        <div className='offerContent'>
                                            <img src={`${ASSETS_BASE_URL}${item.image}`} alt='' />
                                            <div className='offerMasking'>
                                                <Link to="/servicesdetails"
                                                    state={item}
                                                >
                                                    <div className='offerTitle'>
                                                        <h4>{item.name}</h4>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='offerPrice'>
                                                <h5>{`Rs${item.price}`}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryComponent