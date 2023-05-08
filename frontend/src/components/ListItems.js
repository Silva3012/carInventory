//Necessary imports
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddIcon from '@mui/icons-material/Add';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from 'react-router-dom';


export const ListItems = (
  <React.Fragment>
    {/* Dashboard Item */}
    <ListItemButton component={Link} to='/Dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    {/* Add Car Item */}
    <ListItemButton component={Link} to='/Add-Car'>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add A Car" />
    </ListItemButton>
    {/* Update Cars Item */}
    <ListItemButton component={Link} to='/Update-Cars'>
      <ListItemIcon>
        <EditNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Update Cars" />
    </ListItemButton>
    {/* Owners Item */}
    <ListItemButton component={Link} to='/OlderThanFiveYears'>
      <ListItemIcon>
        <DirectionsCarIcon />
      </ListItemIcon>
      <ListItemText primary="Cars 5 years+" />
    </ListItemButton>
  </React.Fragment>
);

