// Import required modules
import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

// Define a functional component for adding a new car
export default function AddCar() {
  // Define state for form inputs and list of cars
  const [regNum, setRegNum] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [owner, setOwner] = useState('');
  const [cars, setCars] = useState([]);
  // Use the useNavigate hook to get a navigation function to navigate to the dashboard page
  const navigate = useNavigate();

  // Define a function that handles form submission
  const handleSubmit = async (event) => {
    // Prevent the default behavior of the form submit event
    event.preventDefault();
    // Create a new car object with the form input values
    const newCar = {
        reg_num: regNum,
        model: model,
        make: make,
        color: color,
        year: year,
        owner: owner,
    };
    try {
      // Send a POST request to the server with the new car data
        const response = await fetch('/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(newCar)
        });
        // Parse the response body as JSON data
        const data = await response.json();
        // Add the new car to the list of cars in state
        setCars([...cars, data.car]);

        // Clear the form inputs after submission
        setRegNum('');
        setModel('');
        setMake('');
        setYear('');
        setColor('');
        setOwner('');

        // Navigate to the dashboard page
        navigate('/Dashboard');
    } catch (error) {
        // Log an any errors
        console.log(error);
    }
  };

  // Handle Cancel
  const handleCancel = () => navigate('/Dashboard');

  // Return a form with input fields for adding a new car and a submit button
  // The form submission is handled by the handleSubmit function
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom align="center" style={{ marginTop: '30px' }}>
        Add A Car
      </Typography>
    
      <Container maxWidth="sm">
        <Box sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="regNum"
              label="Registration Number"
              value={regNum}
              onChange={(e) => setRegNum(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="model"
              label="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="make"
              label="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="year"
              label="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="color"
              label="Colour"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              id="owner"
              label="Owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 3, mb: 10 }}
            >
              Add Car
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ mt: 3, mb: 10 }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};
