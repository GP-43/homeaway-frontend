import React from 'react';
import './App.scss'
import {Routes, Route} from 'react-router-dom';
import UserHome from './views/pages/UserHome'
import HomeAwayApp from './views/HomeAwayApp';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeAwayApp/>}>
                    <Route path='/' element={<UserHome/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
