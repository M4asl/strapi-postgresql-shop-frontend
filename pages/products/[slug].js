import React from 'react';
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

const ProductDetails = () => {
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
  return (
    <DetailsStyle>
      <img src={image} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <AiFillPlusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillMinusCircle />
          </button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
};

export default ProductDetails;
