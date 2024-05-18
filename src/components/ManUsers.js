import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText} from '@mui/material';

const ManageUsers = () => {
  // State to store users
  const [users] = useState([]);

  // Function to calculate total number of users
  const getTotalUsers = () => {
    return users.length;
  };

  return (
    <Container className="container">
      <Typography variant="h4">Manage Users</Typography>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Total Users: {getTotalUsers()}
      </Typography>

      <List>
        {users.map((user, index) => (
          <ListItem key={index}>
            <ListItemText primary={user} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ManageUsers;
