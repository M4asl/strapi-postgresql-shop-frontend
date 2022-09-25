import Image from 'next/image';
import React from 'react';
import { PriceStyle, ProductStyle } from '../styles/ProductStyles';

const Product = ({ product }) => {
  const { title, price, image } = product.attributes;
  return (
    <ProductStyle>
      <div>
        <img
          src={image.data.attributes.formats.small.url}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <PriceStyle>{price}</PriceStyle>
    </ProductStyle>
  );
};

export default Product;
