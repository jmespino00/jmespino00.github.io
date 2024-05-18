import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import ManageUsers from './ManUsers';
import ManageProducts from './ProductList';
import ManageOrders from './ManOrders';
import SalesReport from './Sales';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './App.css'; 


const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('');

  const viewContent = () => {
    if (!currentView) {
      return (
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <Typography variant="h5" align="center">
            Welcome to the Admin Dashboard!
          </Typography>
        </div>
      );
    }

    switch (currentView) {
      case 'users':
        return <ManageUsers />;
      case 'products':
        return <ManageProducts />;
      case 'orders':
        return <ManageOrders />;
      case 'sales':
        return <SalesReport />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" spacing={2} className="dashboard-container">
        <Grid item>
          <AppBar position="static" sx={{ backgroundColor: '#1d2634' }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <DashboardIcon sx={{ marginRight: 1 }} />
                Admin Dashboard
              </Typography>
              <Button 
                color="inherit"
                onClick={() => setCurrentView('users')}
              >
                <PeopleIcon sx={{ marginRight: 1 }} />
                Manage Users
              </Button>
              <Button 
                color="inherit"
                onClick={() => setCurrentView('products')}
              >
                <InventoryIcon sx={{ marginRight: 1 }} />
                Manage Products
              </Button>
              <Button 
                color="inherit"
                onClick={() => setCurrentView('orders')}
              >
                <ShoppingCartIcon sx={{ marginRight: 1 }} />
                Manage Orders
              </Button>
              <Button 
                color="inherit"
                onClick={() => setCurrentView('sales')}
              >
                <BarChartIcon sx={{ marginRight: 1 }} />
                Sales Report
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid item xs={12}>
            {viewContent()}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Dashboard;
