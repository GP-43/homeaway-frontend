import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import UserHome from './views/pages/UserHome';
import UserBookings from "./views/pages/UserBookings";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserHome/>}/>
                <Route path='/userbookings' element={<UserBookings/>}/>
            </Routes>
        </div>
    );
}

export default App;
