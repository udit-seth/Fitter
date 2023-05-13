import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import BmiCalculator from './pages/BmiCalculator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseCounter from './pages/ExerciseCounter';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/BmiCalculator" element={<BmiCalculator />} />
                <Route path="/ExerciseCounter" element={<ExerciseCounter />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App