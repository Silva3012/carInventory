import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { 
  TextField,
  Button, 
  Grid,
  Typography,
  Container,
  Select,
  MenuItem
} from '@mui/material';
import Dashboard from './Dashboard';

// Style component Typography with custom styles
const CustomTypography = styled(Typography)({
  marginTop: '20px',
});

// Style component Grid with custom styles
const CustomGrid = styled(Grid)({
  margin: '20px',
});

export default function UpdateCars() {
  // Set up state hooks for the form data and the cars
  const [formData, setFormData] = useState({
    field: "",
    value: "",
  });

  const [cars, setCars] = useState([]);


  const navigate = useNavigate()

  useEffect(() => {
    // Make a GET request to fetch the cars from the server
    fetch('/cars')
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => console.error(error));
  }, []);

  // Handle changes to the form fields
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, });
  };

// Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedField = formData.field;
    // Construct the filter object for the update
    const filter = {
        $or: cars.map((car) => ({
            make: car.make,
            model: car.model,
            year: car.year,
            color: car.color,
            owner: car.owner,
    })),
    };

    // Construct the update object
    const update = {
        $set: { [selectedField]: formData.value },
    };

    // Send a PATCH request to update the cars with the new value
    fetch(`/cars/multiple`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filter, update }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        navigate('/Dashboard');
      })
      .catch((error) => console.error(error));
  };

  // Handle the cancel button click
  const handleCancel = () => navigate('/Dashboard');

  return (
    <div>
    <Dashboard />
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
      {/* Render the form */}
        <CustomTypography variant="h5" align="center">Update Information on Multiple Cars</CustomTypography>
        <CustomGrid container spacing={2}>
          <Grid item xs={12}>
            <Select
              fullWidth
              id="field"
              name="field"
              label="Field"
              variant="outlined"
              value={formData.field}
              onChange={handleFormChange}
            >
            {/* Render the field options */}
              {/* <MenuItem value="reg_num">Registration Number</MenuItem>
              <MenuItem value="make">Make</MenuItem>
              <MenuItem value="model">Model</MenuItem>
              <MenuItem value="year">Year</MenuItem> */}
              <MenuItem value="color">Colour</MenuItem>
              <MenuItem value="owner">Owner</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth
              id="value" 
              name="value" 
              label="New Value" 
              variant="outlined" 
              value={formData.value} 
              onChange={handleFormChange} 
            />
          </Grid>
          <Grid item xs={12}>
          {/* Render the submit and cancel buttons */}
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>{" "}
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        </CustomGrid>
      </form>  
    </Container>
    </div>
  );
};
