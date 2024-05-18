import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';


const ManageOrders = () => {
  const [orders] = useState([]);

  return (
    <Container>
      <Typography variant="h4">Manage Orders</Typography>
      <List>
        {orders.map((order, index) => (
          <ListItem key={index}>
            <ListItemText primary={order} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ManageOrders;
