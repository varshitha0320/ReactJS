import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import "./style.css";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/welcome" element={<WelcomePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
