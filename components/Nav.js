import React from 'react';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavItems, NavStyles } from '../styles/NavStyles';
import Cart from './Cart';
import User from './User';

import { useStateContext } from '../lib/context';
const { AnimatePresence } = require('framer-motion');

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } =
    useStateContext();
  return (
    <NavStyles>
      <Link href={'/'}>Home.</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
          <FiShoppingBag />

          <h3>Cart:)</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
};

export default Nav;
