import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClippedDrawer from './components/Drawer';
import Dashboard from './components/Dashboard';
import EditCar from './components/EditCar';
import AddCar from './components/AddCar';
import Copyright from './components/Copyright';
import UpdateCars from './components/UpdateCars';

export default function App() {
  return (
    <div>
      <Router>
        <ClippedDrawer />
          <Routes>
            {/* Define more routes here */}
            <Route path="/" element={<Link to="/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Add-Car" element={<AddCar />} />
            <Route path="/Update-Cars" element={<UpdateCars />} />
            <Route path="/cars/:id/edit" element={<EditCar />} />
          </Routes> 
        <Copyright />  
      </Router>
    </div>
    
  );
}

