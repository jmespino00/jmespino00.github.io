import React from 'react';
import { Container, Typography } from '@mui/material';


const SalesReport = () => {
  const salesData = [];

  return (
    <Container>
      <Typography variant="h4">Sales Report</Typography>
      <ul>
        {salesData.map((data, index) => (
          <li key={index}>{``}</li>
        ))}
      </ul>
    </Container>
  );
};

export default SalesReport;
