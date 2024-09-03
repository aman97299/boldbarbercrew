// import React from 'react'
// import "./servicesDetails.css"
// import { useLocation } from 'react-router-dom'
// import { ASSETS_BASE_URL } from '../../utils/constants'

// function ServicesDetailsContent() {

//     const { state } = useLocation()
//     const getCategoryData = state


//     return (
//         <div div className='main-exclusive-services' >
//             <div className='container'>
//                 <div className='secotionTitle'>
//                     <h2><span>Services Details</span>{getCategoryData.name}</h2>
//                 </div>
//                 <div className='serviceDetails-image-des-main'>
//                     <div className='image-main'>
//                         <img width={"770px"} height={"400px"} src={`${ASSETS_BASE_URL}${getCategoryData.image}`} alt='' />
//                     </div>
//                     <div className='des-main'>
//                         <h2>
//                             {`$${getCategoryData.price} Per Head`}
//                         </h2>
//                         <p>{getCategoryData.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ServicesDetailsContent