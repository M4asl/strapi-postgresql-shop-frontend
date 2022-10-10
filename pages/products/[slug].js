import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import {
  Buy,
  DetailsStyle,
  ProductInfo,
  Quantity,
} from '../../styles/ProductDetailsStyle';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import toast from 'react-hot-toast';

import { useStateContext } from '../../lib/context';

const ProductDetails = () => {
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const product = data.products.data[0].attributes;
  const { title, description } = product;
  const image = product.image.data.attributes.formats.small.url;

  //Create Toast
  const notify = () => {
    toast.success(`${title} added to your cart.`, {
      duration: 1500,
    });
  };

  return (
    <DetailsStyle>
      <img src={image} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(product, qty);
            notify();
          }}
        >
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
