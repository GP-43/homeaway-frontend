import React from 'react';
import './App.scss'
import {Routes, Route} from 'react-router-dom';
import UserHome from './views/pages/UserHome'
import PlacesCard from './views/PlacesCard';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserHome/>}/>
                <Route path='/placecard' element={<PlacesCard/>}/>
            </Routes>
        </div>
    );
}

export default App;
