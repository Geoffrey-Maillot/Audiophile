import React, { useEffect } from 'react';

// Import React Router
import { useParams } from 'react-router';

// Import Component
import Product from './Product';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { productFilter, filterValue } from '../../Recoil/index';

const ProductPage = () => {
  // Filter Product
  const { slug } = useParams<{ slug: string }>();

  // filter recoil
  useSetRecoilState(filterValue)(slug);

  // use Recoil selector
  const product = useRecoilValue(productFilter);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return product.length > 0 && <Product {...product[0]} />;
};

export default ProductPage;
