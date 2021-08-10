// Import React
import React from 'react';

// Import Style
import './styles.scss';

// Import React Router
import { Link } from 'react-router-dom';

// Import React-icons
// custom react-icons style
import { IconContext } from 'react-icons';
import { HiChevronRight } from 'react-icons/hi';

// Import Component
import headphone from 'src/assets/img/shared/desktop/image-headphones.png';
import speaker from 'src/assets/img/shared/desktop/image-speakers.png';
import earphone from 'src/assets/img/shared/desktop/image-earphones.png';

// Import styledComponent
import { ButtonShop, H6 } from 'src/styles/styledComponents';

// Component
const Categories = () => (
  <IconContext.Provider value={{ style: { position: 'relative', top: 2 } }}>
    <section className="categories">
      <ul className="categories_list">
        <li className="list-item">
          <div className="list-item_contain">
            <img className="contain-img" src={headphone} alt="headphone" />
            <H6 className="contain-title">Headphones</H6>
            <Link className="contain-link" to="/category/headphones">
              Shop <HiChevronRight color="#D87D4A" size="1.3em" />
            </Link>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item_contain">
            <img className="contain-img" src={speaker} alt="speaker" />
            <H6 className="contain-title">Speakers</H6>
            <Link className="contain-link" to="/category/speakers">
              Shop <HiChevronRight color="#D87D4A" size="1.3em" />
            </Link>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item_contain">
            <img className="contain-img" src={earphone} alt="earphone" />
            <H6 className="contain-title">Earphones</H6>
            <Link className="contain-link" to="/category/earphones">
              Shop <HiChevronRight color="#D87D4A" size="1.3em" />
            </Link>
          </div>
        </li>
      </ul>
    </section>
  </IconContext.Provider>
);

export default Categories;
