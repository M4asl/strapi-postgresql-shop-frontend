import React from 'react';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavItems, NavStyles } from '../styles/NavStyles';
import Cart from './Cart';
import { useStateContext } from '../lib/context';

const Nav = () => {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavStyles>
      <Link href={'/'}>Home.</Link>
      <NavItems>
        <div onClick={() => setShowCart(!showCart)}>
          <FiShoppingBag />

          <h3>Cart:)</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
};

export default Nav;
