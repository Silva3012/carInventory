import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClippedDrawer from './components/Drawer';
import Dashboard from './components/Dashboard';
import EditCar from './components/EditCar';
import AddCar from './components/AddCar';
import Copyright from './components/Copyright';
import UpdateCars from './components/UpdateCars';
import OlderThanFiveYears from './components/OlderThanFiveYears';
import theme from './components/themes';
import { ThemeProvider } from '@emotion/react';

export default function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Router>
        <ClippedDrawer />
          <Routes>
            {/* Define more routes here */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Add-Car" element={<AddCar />} />
            <Route path="/Update-Cars" element={<UpdateCars />} />
            <Route path="/OlderThanFiveYears" element={<OlderThanFiveYears />} />
            <Route path="/cars/:id/edit" element={<EditCar />} />
          </Routes> 
        <Copyright />  
      </Router>
      </ThemeProvider>
    </div>
  );
}

