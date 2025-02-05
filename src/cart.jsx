import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';
import './App.css';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price) * parseFloat(item.quantity), 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price} x {item.quantity} = {parseFloat(item.price) * parseFloat(item.quantity)}JD</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={e => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))}
                />
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {totalAmount.toFixed(2)}JD</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;