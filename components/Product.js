import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PriceStyle, ProductStyle } from '../styles/ProductStyle';

const Product = ({ product }) => {
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`products/${slug}`}>
        <img
          src={image.data.attributes.formats.small.url}
          alt={title}
        />
      </Link>
      <h2>{title}</h2>
      <PriceStyle>{price}</PriceStyle>
    </ProductStyle>
  );
};

export default Product;
