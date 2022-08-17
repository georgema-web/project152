import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './components/TopBar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

import Box from '@mui/material/Box';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import { FunctionDiv } from './sample.js';

const theme = createTheme({
    palette: {
        primary: orange,
        secondary: {
            main: '#000000',
        },
    },
});

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div>
                    <TopBar />
                    <FunctionDiv />
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/product" element={<ProductPage />} />
                        <Route exact path="/cart" element={<CartPage />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

/**
 *
 * TODO: why doesnt theme work?
 */
