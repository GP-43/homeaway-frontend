import React, {useEffect, useState} from 'react';
import './App.scss';
import {browserHistory} from 'react-router'
import { Routes, Route, useNavigate,Navigate } from 'react-router-dom';
import UserHome from './views/pages/user/UserHome';
import UserBookings from "./views/pages/user/UserBookings"
import HomeAwayUser from './views/HomeAwayUser';
import UserRentings from './views/pages/user/UserRentings';
import HomeAwayAdmin from "./views/HomeAwayAdmin";
import Dashboard from "./views/pages/Admin/Dashboard";
import PlaceDescription from './views/pages/user/PlaceDescription';
import HomeAwayAnons from "./views/HomeAwayAnons";
import Occupant from './views/pages/Admin/Occupants';
import Renter from './views/pages/Admin/Renters';
import Payment from "./views/pages/Admin/Payment";
import Earnings from './views/pages/Admin/Earnings';
import Places from "./views/pages/Admin/Places"
import Home from './views/pages/anons/Home';
import Login from "./views/pages/anons/Login";
import Signup from "./views/pages/anons/Signup";
import AddNewRent from './components/user/add_new_rening/AddNewRent';
import Complaints from './views/pages/Admin/Complaints';
import UserProfile from './views/pages/user/UserProfile';
import PaymentsOfPlaces from './components/user/paymentbox/PaymentsOfPlaces';
import MyPlaceDescription from './views/pages/user/MyPlaceDescription';
import FAQ from './views/pages/anons/FAQ'; 
import { useLocation } from 'react-router-dom';

function App() {

    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    const isAuthenticated = userDetails ? true : false;
    
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeAwayAnons />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/faq' element={<FAQ/>} />
                </Route>
                <Route path='/user' element={<HomeAwayUser />}>
                    <Route path='/user/' element={isAuthenticated ? <UserHome /> : <Navigate to='/login'/>} />
                    <Route path='/user/' element={<UserHome />} />
                    <Route path='/user/userbookings' element={<UserBookings />} />
                    <Route path='/user/userrentings' element={<UserRentings />} />
                    <Route path='/user/myplacedescription/:id' element={<MyPlaceDescription />} />
                    <Route path='/user/placedescription/:id' element={<PlaceDescription />} />
                    <Route path='/user/addnewrent' element={<AddNewRent />} />
                    <Route path='/user/profile' element={<UserProfile />} />
                    <Route path='/user/paymentofplaces' element={<PaymentsOfPlaces />} />
                    <Route path='/user/*' element={<Navigate to='/user' />} />
                </Route>
                <Route path='/admin' element={<HomeAwayAdmin />}>
                    <Route path='/admin/' element={isAuthenticated ? <UserHome /> : <Navigate to='/login'/>} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/occupants' element={<Occupant />} />
                    <Route path='/admin/renters' element={<Renter />} />
                    <Route path='/admin/complains' element={<Complaints />} />
                    <Route path='/admin/payment' element={<Payment />} />
                    <Route path='/admin/earnings' element={<Earnings />} />
                    <Route path='/admin/places' element={<Places />} />
                    <Route path='/admin/*' element={<Navigate to='/admin/dashboard'/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
