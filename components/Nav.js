import React from 'react';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavItems, NavStyles } from '../styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <Link href={'/'}>Home.</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyles>
  );
};

export default Nav;
