import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ManageUsers from './components/ManUsers';
import ManageOrders from './components/ManOrders';
import SalesReport from './components/Sales';
import ProductList from './components/ProductList';

function App() {
  const [view, setView] = useState('dashboard');

  const renderView = () => {
    switch (view) {
      case 'users':
        return <ManageUsers />;
      case 'orders':
        return <ManageOrders />;
      case 'sales':
        return <SalesReport />;
      case 'products':
        return <ProductList />;
      default:
        return <Dashboard setView={setView} />;
    }
  };

  return (
    <div>
      {renderView()}
    </div>
  );
}

export default App;
