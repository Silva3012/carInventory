// Necessary imports
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography, 
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Define styles for the component
const CustomTableContainer = styled(TableContainer)({
    maxWidth: '70%',
    overflow: 'auto',
    margin: 'auto',
    marginLeft: '300px',
    display: 'flex',
    justifyContent: 'center',
    
});

// Define the Dashboard component
export default function Dashboard() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    // Fetch the list of cars when the component is mounted
    useEffect(() => {
        async function fetchCars() {
            // Make a GET request to the /cars endpoint on the server
            const res = await fetch(`/cars`);
            // Parse the response body as JSON data
            const data = await res.json();
            // Update the state with the list of cars
            setCars(data.cars)
        }
        fetchCars();
    }, []);

    // Function to handle edit car
    const handleEditCar = (car) => {
        navigate(`/cars/${car._id}/edit`);
    }

    // Function to delete a car
    const handleDeleteCar = async (id) => {
    // Make a DELETE request to the /cars/:id endpoint on the server
    const res = await fetch(`/cars/${id}`, {
      method: 'DELETE',
    });
    // If the request was successful, remove the car from the list in state
    if (res.ok) {
      setCars(cars.filter((car) => car._id !== id));
    } else {
      console.error(`Failed to delete car with ID ${id}`);
    }
    };

    // Render table with the list of cars
    return (
        <div>
        <Typography variant="h5" component="h2" gutterBottom align="center" style={{ marginTop: '20px' }}>
        Cars List
        </Typography>
        <CustomTableContainer component={Paper} style={{ marginBottom: '20px' }}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Registration Number</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Colour</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cars.length > 0 && cars.map((car) => (
                <TableRow key={car._id}>
                <TableCell>{car.reg_num}</TableCell>
                <TableCell>{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.color}</TableCell>
                <TableCell>{car.owner}</TableCell>
                <TableCell>
                    <IconButton 
                    variant="contained" 
                    color="error" 
                    onClick={() => handleDeleteCar(car._id)}
                    >
                    <DeleteIcon />
                    </IconButton>{" "}
                    <IconButton 
                    variant="contained" 
                    color="warning" 
                    onClick={() => handleEditCar(car)}
                    >
                    <EditIcon />
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </CustomTableContainer> 
        </div>
    );
}