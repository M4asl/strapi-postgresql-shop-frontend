import React from 'react';
import { useStateContext } from '../lib/context';
import { FaShoppingCart } from 'react-icons/fa';
import {
  Card,
  CardInfo,
  CartStyle,
  CartWrapper,
  Checkout,
  EmptyStyle,
} from '../styles/CartStyles';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { Quantity } from '../styles/ProductDetailsStyle';

const Cart = () => {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();
  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween' }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: '50%' }}
        animate={{ x: '0%' }}
        exit={{ x: '50%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>You have more shopping to do :)</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                key={item.slug}
              >
                <img
                  src={item.image.data.attributes.formats.small.url}
                />
                <CardInfo>
                  <h3>title</h3>
                  <h3>price</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal: {totalPrice}$</h3>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
