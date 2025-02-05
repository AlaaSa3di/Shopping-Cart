import React from 'react';
import ProductList from './product';
import Cart from './cart';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Super Market</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
