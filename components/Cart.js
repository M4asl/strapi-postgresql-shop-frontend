import React from 'react';
import { useStateContext } from '../lib/context';
import { FaShoppingCart } from 'react-icons/fa';
import {
  Card,
  CardInfo,
  CartStyle,
  CartWrapper,
  EmptyStyle,
} from '../styles/CartStyles';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { Quantity } from '../styles/ProductDetailsStyle';

const Cart = () => {
  const { cartItems, setShowCart, onAdd, onRemove } =
    useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>You have more shopping to do :)</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.small.url}
                />
                <CardInfo>
                  <h3>title</h3>
                  <h3>price</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button
                      onClick={() => onAdd(item, item.quantity)}
                    >
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
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
