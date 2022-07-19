import React from 'react';
import './App.scss'
import {Routes, Route} from 'react-router-dom';
import UserHome from './views/pages/UserHome'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserHome/>}/>
            </Routes>
        </div>
    );
}

export default App;
