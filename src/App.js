import React, {useEffect, useState} from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Places from "./views/pages/Admin/Places"
import Home from './views/pages/anons/Home';
import Login from "./views/pages/anons/Login";
import Signup from "./views/pages/anons/Signup";
import AddNewRent from './components/user/add_new_rening/AddNewRent';
import Complaints from './views/pages/Admin/Complaints';
function App() {

    // const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    //
    // const [isAuthenticated, setIsAuthenticated] = useState(true);
    //
    // useEffect(() => {
    //     if (userDetails){
    //         if(userDetails.token){
    //             setIsAuthenticated(true);
    //         } else {
    //             setIsAuthenticated(false);
    //         }
    //     }
    // }, [userDetails]);

    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeAwayAnons />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Route>
                <Route path='/user' element={<HomeAwayUser />}>
                    {/*<Route path='/user/' element={isAuthenticated ? <UserHome /> : <Navigate to='/login'/>} />*/}
                    <Route path='/user/' element={<UserHome />} />
                    <Route path='/user/userbookings' element={<UserBookings />} />
                    <Route path='/user/userrentings' element={<UserRentings />} />
                    <Route path='/user/placedescription' element={<PlaceDescription />} />
                    <Route path='/user/addnewrent' element={<AddNewRent />} />
                </Route>
                <Route path='/admin' element={<HomeAwayAdmin />}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/occupants' element={<Occupant />} />
                    <Route path='/admin/renters' element={<Renter />} />
                    <Route path='/admin/complains' element={<Complaints />} />
                    <Route path='/admin/payment' element={<Payment />} />
                    <Route path='/admin/places' element={<Places />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
