import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

export default function OlderThanFiveYears() {
  const [olderCars, setOlderCars] = useState([]);

  useEffect(() => {
    fetch('/cars/olderThanFiveYears')
      .then((response) => response.json())
      .then((data) => setOlderCars(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" style={{ marginTop: '30px' }}>
        Cars older than 5 years
      </Typography>
      <TableContainer style={{ marginBottom: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Registration Number</TableCell>
              <TableCell>Owner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {olderCars && olderCars.length > 0 ? (
              olderCars.map((car) => (
                <TableRow key={car._id}>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.make}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.reg_num}</TableCell>
                  <TableCell>{car.owner}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No cars older than 5 years found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
