import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../screens/homeScreen/Home v1';
import ServicesBooking from '../screens/servicesBookingFormScreen';
import ServicesDetailsScreen from '../screens/servicesDetailsScreen';
import ProductViewScreen from '../screens/productsScreen';
import Dashboard from '../screens/admin'
import ServicesDetails from '../components/servicesDetailsComponent/servicesDetailsMain';
import Showproduct from '../components/productsComponent/showproduct';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import AddToCart from '../components/productsComponent/AddToCart';


function Navigation() {
    return (
        <BrowserRouter>
    
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='/servicesbookingform' element={<ServicesBooking />} />
                <Route path='/servicesdetails' element={<ServicesDetailsScreen />} />
                <Route path='/products' element={<ProductViewScreen />} />
                <Route path='/admin' element={<Dashboard />} />
                <Route path='/showproduct' element={<Showproduct/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/AddToCart' element={<AddToCart/>} />
                {/* <Route path='/servicedetail' element={<ServicesDetails />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation