import React from 'react';
import './assets/styles/_main.scss'
import {Routes, Route} from 'react-router-dom';
import UserHome from './views/pages/UserHome'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<UserHome/>}/>
            </Routes>
        </div>
    );
}

export default App;
