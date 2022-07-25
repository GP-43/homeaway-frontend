import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import UserHome from './views/pages/UserHome';
import UserBookings from "./views/pages/UserBookings"
import HomeAwayApp from './views/HomeAwayApp';
import PlaceDescription from './views/pages/PlaceDescription';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeAwayApp />}>
                    <Route path='/' element={<UserHome />} />
                    <Route path='/userbookings' element={<UserBookings />} />
                    <Route path='/placedescription' element={<PlaceDescription />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
