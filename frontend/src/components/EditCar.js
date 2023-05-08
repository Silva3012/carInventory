import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { 
  TextField,
  Button, 
  Grid,
  Typography,
  Box,
  Container
} from '@mui/material';

// Style component Typography with custom styles
const CustomTypography = styled(Typography)({
  marginTop: '20px',
});

// Style component Grid with custom styles
const CustomGrid = styled(Grid)({
  margin: '20px',
});

// Component to edit a car
export default function EditCar(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize car state with default values
  const [car, setCar] = useState({
    reg_num: '',
    make: '',
    model: '',
    year: '',
    color: '',
    owner: '',
  });
 
  // Fetch the car data from the server and update the car state when the component mounts
  useEffect(() => {
    async function fetchCar() {
      const res = await fetch(`/cars/${id}`);
      const data = await res.json();
      setCar(data.car);
    }
    fetchCar();
  }, [id]);

  // Update the car state when the input fields change
  const handleChange = (event) => {
    setCar({
      ...car,
      [event.target.name]: event.target.value
    });
  }

  // Handle the form submit by sending a PUT request to the server with the updated car data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    const data = await res.json();
    console.log(data);
    navigate('/Dashboard');
  }

  // Handle the cancel button by navigating back to the Dashboard page
  const handleCancel = () => navigate('/Dashboard');

  // Render the form to edit a car
  return (
    <Container maxWidth="sm">
    <form onSubmit={handleSubmit}>
      <CustomTypography variant="h4" align="center">Update Car Information</CustomTypography>
      <CustomGrid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            required 
            id="reg_num" 
            name="reg_num" 
            label="Registration Number" 
            variant="outlined" 
            value={car.reg_num} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            required 
            id="make" 
            name="make" 
            label="Make" 
            variant="outlined" 
            value={car.make} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            required 
            id="model" 
            name="model" 
            label="Model" 
            variant="outlined" 
            value={car.model} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            required 
            id="year" 
            name="year" 
            label="Year" 
            variant="outlined" 
            value={car.year} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            required 
            id="color" 
            name="color" 
            label="Color" 
            variant="outlined" 
            value={car.color} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            required 
            id="owner" 
            name="owner" 
            label="Owner" 
            variant="outlined" 
            value={car.owner} 
            onChange={handleChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>{" "}
          <Button variant="contained" color="secondary" type="submit" onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
      </CustomGrid>
    </form>
   </Container>
  );
};