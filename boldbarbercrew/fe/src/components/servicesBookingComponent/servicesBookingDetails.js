import axios from 'axios'
import React from 'react'

function ServicesBookingDetails() {
    const [data, setData] = React.useState([])
    const [service, setSelectedServices] = React.useState([])
    const [appointmentDate, setDate] = React.useState(new Date())
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [notes, setNote] = React.useState('')
    const [phone, setPhone] = React.useState('')

    React.useEffect(() => {
        getServices()
    }, [])

    const handleSubmitBooking = async () => {
        const payload = { service, appointmentDate, name, email, notes, phone }
        const url = 'http://localhost:3000/addBooking'
        const response = await axios.post(url, payload)
        if (response) {
            alert("Success")

        }
    }
    const getServices = async () => {
        const url = "http://localhost:3000/getServices"
        const response = await axios.get(url)
        if (response) {
            setData(response?.data)
        }
    }
    const handleServicesOnChange = (i, e) => {
        let tempArray = []
        if (e.target.checked) {
            tempArray.push(...service, i?.name)
        } else {
            tempArray = service
            tempArray.pop()
        }
        setSelectedServices(tempArray)
    }
    return (
        <div style={{ padding: '40px' }}>
            <div className='container'>
                <div className='services-details-main'>
                    <div className='contact-us-main'>
                        <div className='services-details-inner-div'>
                            <div className='detials-main'>
                                <div className='inner-input-fields-main'>
                                    <label>Select Services:</label>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        {data?.map((i) => {
                                            return (<div key={i?.name} style={{ display: "flex", alignItems: 'center', gap: "5px" }}>
                                                <input onChange={(e) => { handleServicesOnChange(i, e) }} type='checkbox' />
                                                <span>{i?.name}</span>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='inner-input-fields-main'>
                                    <label>Appointment Date:</label>
                                    <input defaultValue={new Date()} value={appointmentDate} onChange={(e) => { setDate(e.target.value) }} type='date' />
                                </div>

                                <div className='inner-input-fields-main'>
                                    <label>Name</label>
                                    <input onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className='inner-input-fields-main'>
                                    <label>Email</label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className='inner-input-fields-main'>
                                    <label>Note (optional)</label>
                                    <textarea onChange={(e) => { setNote(e.target.value) }} />
                                </div>

                                <div className='inner-input-fields-main'>
                                    <label>Phone</label>
                                    <input onChange={(e) => { setPhone(e.target.value) }} />
                                </div>
                                <div className='button-main'>
                                    <button onClick={() => { handleSubmitBooking() }}>GET  BOOKING</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar'>
                        <div className='services-sidebar-inner'>
                            <h2>SERIVICES BOOKING</h2>
                            <p>Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam Eaque. Lorem ipsum dolor sit amet, consectetur adipiselit, sed do eiusmod.</p>
                            <div className='contact-details-main'>
                                <div className='location-main'>
                                    <div className='location-left-side'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill='white' viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                                    </div>
                                    <div className='location-right-side'>
                                        <h3>BOLDBARBERCREW, Victoria Street</h3>
                                        <h3>Sheffield, INDIA</h3>
                                    </div>
                                </div>

                                <div className='location-main'>
                                    <div className='location-left-side'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill='white' class="bi bi-clock" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                    </div>
                                    <div className='location-right-side'>
                                        <h3>Sunday - Friday</h3>
                                        <h3>9am - 5pm</h3>
                                    </div>
                                </div>

                                <div className='phone-main'>
                                    <div className='phone-left-side'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill='white' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    </div>
                                    <div className='phone-right-side'>
                                        <h3>+91 9729948942 </h3>
                                        <h3>+91 9709948942 </h3>
                                    </div>
                                </div>


                                <div className='Email-main'>
                                    <div className='Email-left-side'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </div>
                                    <div className='Email-right-side'>
                                        <h3>ketan551@gmail.com</h3>
                                        <h3>ketan551@gmail.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default ServicesBookingDetails