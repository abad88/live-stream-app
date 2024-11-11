import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Room from './Room';

function App() {

    return (
        <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/room/:roomId' element={<Room/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;