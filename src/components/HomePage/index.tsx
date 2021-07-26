// Import React
import React from 'react';

// Import Style
import './styles.scss';

// Import Components
import HeaderHome from './HeaderHome';
import Categories from 'src/components/Categories';

const HomePage = () => (
  <div className="homepage">
    <HeaderHome />
    <Categories />
  </div>
);

export default HomePage;
