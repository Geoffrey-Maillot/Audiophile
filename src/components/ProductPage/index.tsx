import React, { useState, useEffect } from 'react';

// Import React Router
import { useParams } from 'react-router';

// Import Component
import Product from './Product';

// Import Data
import data from 'src/data/data.json';

interface Props {
  product: {};
}

const ProductPage = () => {
  // Filter Product
  const { slug } = useParams<{ slug: string }>();
  const product = data.filter((item) => item.slug === slug)[0];

  console.log(product);
  return <Product {...product} />;
};

export default ProductPage;
