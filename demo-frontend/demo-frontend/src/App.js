import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


import AnimalList from './components/AnimalList';
import AddAnimal from './components/AddAnimal';
import Menu from './components/Menu';

const App = () => {
    return (

            <Router>
                <div>
                    <Menu />
                    <Routes>
                        <Route exact path="/" element={<AnimalList />} />
                        <Route path="/add-animal" element={<AddAnimal />} />
                    </Routes>
                </div>
                {/* <Outlet/> */}
            </Router>
    );
};

export default App;
