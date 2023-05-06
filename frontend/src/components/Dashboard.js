// Necessary imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button 
} from '@mui/material';

// Define styles for the component
const CustomTableContainer = styled(TableContainer)({
  margin: '20px',
});

const CustomButton = styled(Button)({
  textDecoration: 'none',
});

// Define the Dashboard component
export default function Dashboard() {
    const [cars, setCars] = useState([]);

    // Fetch the list of cars when the component is mounted
    useEffect(() => {
        async function fetchCars() {
            // Make a GET request to the /cars endpoint on the server
            const res = await fetch(`http://localhost:3001/cars`);
            // Parse the response body as JSON data
            const data = await res.json();
            // Update the state with the list of cars
            setCars(data.cars)
        }
        fetchCars();
    }, []);

    return (
        <CustomTableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Registration Number</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Year</TableCell>
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
                <TableCell>
                    <CustomButton 
                    variant="contained" 
                    color="error" 
                    // onClick={() => deleteCar(car._id)}
                    >
                    Delete
                    </CustomButton>{" "}
                    <CustomButton 
                    variant="contained" 
                    color="warning" 
                    component={Link} 
                    to={`/cars/${car._id}/edit`}
                    >
                    Edit
                    </CustomButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </CustomTableContainer>  
    );
}