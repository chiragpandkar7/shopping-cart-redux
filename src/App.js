import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Home from './component/Home/Home.js';
import Products from './component/Products/Products.js';
import Navbar from './component/Navbar/Navbar.js';
import Cart from './component/Cart/Cart.js';

function App() {
  const defaultRoute = <Navigate to='/home' />;

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="*" element={defaultRoute} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
