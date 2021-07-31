// Import React
import React from 'react';

// Import Style
import './styles.scss';
import { H4 } from 'src/styles/styledComponents';

// Import React Router
import { useParams } from 'react-router';

// Import Component
import Categories from 'src/components/Categories';
import BestGear from 'src/components/BestGear';
import ItemProduct from './ItemProduct';

// Import Data
import data from 'src/data/data.json';

// --> Component

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const products = data.filter((item) => item.category === slug);
  console.log(products);

  return (
    <div className="category-page">
      {/* HEADER */}
      <header className="category-page_header">
        <H4 style={{ textTransform: 'uppercase' }} color="#fff">
          {slug}
        </H4>
      </header>
      {/* CONTENT */}
      <div className="category-page_content container-large">
        {/* ITEM PRODUCT */}
        {products.map((product) => (
          <ItemProduct key="product.id" {...product} />
        ))}
        {/* Component -->*/}
        <Categories />
        <BestGear />
      </div>
    </div>
  );
};

export default CategoryPage;
