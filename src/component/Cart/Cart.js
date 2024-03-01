import React from 'react';
import { Button, List, ListItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, removeItem } from '../../store/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  if (!cartItems || !cartItems.length) {
    return (
      <div>
        <Typography variant="h5">Your Cart is Empty</Typography>
      </div>
    );
  }

  const handleRemoveItem = (itemId, itemTitle) => {
    dispatch(removeItem(itemId));
    console.log(cartItems);
    
    alert(`Removed ${itemTitle} from cart`)
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price , 0)
  }; 

  return (
    <div>
      <Typography variant="h5">Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <Typography>
              {item.title}  Rs. {item.price} (Quantity: {item.quantity}) (Amount: {item.price * item.quantity})
            </Typography>
            <Button color='primary' variant='contained' onClick={() => handleRemoveItem(item.id, item.title)}>Remove item</Button>
          </ListItem>
        ))}
      </List>

      <Typography>
        Total Amount: Rs. {getTotalAmount()}
      </Typography>
    </div>
  );
}

export default Cart;
