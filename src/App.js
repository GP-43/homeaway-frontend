import React from 'react';
import './App.scss'
import {Routes, Route} from 'react-router-dom';
import UserHome from './views/pages/UserHome'
import PlacesCard from './views/PlacesCard';
import HomeAwayApp from './views/HomeAwayApp';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/placecard' element={<PlacesCard/>}/>
                <Route path='/' element={<HomeAwayApp/>}>
                <Route path='/' element={<UserHome/>}/>
            </Routes>
        </div>
    );
}

export default App;
