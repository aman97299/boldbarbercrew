import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { APP_BASE_URL, ASSETS_BASE_URL } from '../../../utils/constants'

function ExclusiveServices() {
    const [active, setActive] = useState(null)
    const [getServicesData, setGetServicesData] = useState([])
    const [showData, setShowData] = useState(null)

    const nav = useNavigate()

    const handleItemClick = (item, id) => {
        setActive(active === id ? null : id)
        setShowData(item)
    }

    useEffect(() => {
        axios.get(APP_BASE_URL + 'getServices')
            .then((response) => {
                setGetServicesData(response.data)
                if (response.data.length > 0) {
                    setActive(response.data[0]._id);
                    setShowData(response.data[0]);
                }
            }).catch((err) => {
                console.log("error", err)
            })
    }, [])


    return (
        <div className='main-exclusive-services'>
            <div className='container'>
                <div className='secotionTitle'>
                    <h2><span>Discover</span>EXCLUSIVE SERVICES</h2>
                </div>
                <div className='elementor-widget-container'>
                    <div className='inner-exclusive-main'>
                        <div className='left-side-card'>
                            {
                                getServicesData.map((item) => (
                                    <div
                                        key={item._id}
                                        onClick={() => handleItemClick(item, item._id)}
                                        className={active === item._id ? 'activeItem' : 'inner-left-side-card'} >
                                        <h3>{item.name}</h3>
                                        <span>{`Rs${item.price}`}</span>
                                    </div>
                                ))
                            }
                            <button
                                onClick={() => nav("/servicesbookingform")}
                            > Book Services</button>
                        </div>

                        <div className='right-side-content'>
                            <img src={`${ASSETS_BASE_URL}${showData?.image}`} alt='' />
                            <h3>{showData?.name}</h3>
                            <h4>{`Rs${showData?.price}Per Head`}</h4>
                            <p>{showData?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ExclusiveServices