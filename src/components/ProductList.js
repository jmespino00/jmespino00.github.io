import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ProductList = () => {
  const [products] = useState([
    {name: 'qwe', type: 'rty', price: '1', description: 'uiop', quantity: '2'}
  ]);

  return (
    <Container>
      <Typography variant="h4">Manage Products</Typography>
      <List>
        {products.map((product, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={product.name}
              secondary={'Type: ' + product.type + ', Price: ' + product.price + ', Description: ' + product.description + ', Quantity: ' + product.quantity}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
