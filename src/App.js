import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import UserHome from './views/pages/user/UserHome';
import UserBookings from "./views/pages/user/UserBookings"
import HomeAwayUser from './views/HomeAwayUser';
import UserRentings from './views/pages/user/UserRentings';
import HomeAwayAdmin from "./views/HomeAwayAdmin";
import Dashboard from "./views/pages/Admin/Dashboard";
import PlaceDescription from './views/pages/user/PlaceDescription';
import HomeAwayAnons from "./views/HomeAwayAnons";
import Home from './views/pages/anons/Home'
import Login from "./views/pages/anons/Login";
import Signup from "./views/pages/anons/Signup";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeAwayAnons />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Route>
                <Route path='/user' element={<HomeAwayUser />}>
                    <Route path='/user/' element={<UserHome />} />
                    <Route path='/user/userbookings' element={<UserBookings />} />
                    <Route path='/user/userrentings' element={<UserRentings />} />
                    <Route path='/user/placedescription' element={<PlaceDescription />} />
                </Route>
                <Route path='/admin' element={<HomeAwayAdmin />}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
