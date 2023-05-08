import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PersistentDrawerLeft from './components/Drawer';
import EditCar from './components/EditCar';

export default function App() {
  return (
    <Router>
        <PersistentDrawerLeft>
            <Routes>
            {/* Define more routes here */}
                <Route path="/" element={<Link to="/Dashboard" />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/cars/:id/edit" element={<EditCar />} />
            </Routes>
        </PersistentDrawerLeft>
    </Router>
  );
}

