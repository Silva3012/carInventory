import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function AddCar( {onAdd} ) {
  const [regNum, setRegNum] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCar = {
      reg_num: regNum,
      model: model,
      make: make,
      color: color,
      year: year,
      owner: owner,
    };
    onAdd(newCar);
    // Clear the fields after submitting
    setRegNum('');
    setModel('');
    setMake('');
    setYear('');
    setColor('');
    setOwner('');
  };

  return (
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
            sx={{ mt: 3 }}
          >
            Add Car
          </Button>
        </form>
      </Box>
    </Container>
  );
};
