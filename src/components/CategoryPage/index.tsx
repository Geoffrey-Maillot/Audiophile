// Import React
import React from 'react';

// Import Style
import './styles.scss';
import {
  H4,
  H5,
  OverlineText,
  Body,
  Button,
} from 'src/styles/styledComponents';

// Import IMG
import headPhoneMarkTwoMobile from 'src/assets/img/category-headphones/mobile/image-xx99-mark-two.jpg';
import headPhoneMarkTwoTablet from 'src/assets/img/category-headphones/tablet/image-xx99-mark-two.jpg';
import headPhoneMarkTwoDesktop from 'src/assets/img/category-headphones/desktop/image-xx99-mark-two.jpg';

// Inport Component
import Categories from 'src/components/Categories';
import BestGear from 'src/components/BestGear';
import ItemProduct from './ItemProduct';

// Import Librairie
import { useMediaQuery } from 'react-responsive';

// --> Component

const CategoryPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1124px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  return (
    <div className="category-page">
      {/* HEADER */}
      <header className="category-page_header">
        <H4 color="#fff">Headphones</H4>
      </header>
      {/* CONTENT */}
      <div className="category-page_content container-large">
        {/* ITEM PRODUCT */}
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />

        <Categories />
        <BestGear />
      </div>
    </div>
  );
};

export default CategoryPage;
